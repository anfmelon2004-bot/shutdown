import uuid
import os
from fastapi import UploadFile, HTTPException

UPLOAD_DIR = "uploads"
ALLOWED_EXTENSIONS = {".jpg", ".jpeg", ".png", ".gif", ".webp"}
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB


def _validate_magic_bytes(contents: bytes, ext: str) -> bool:
    if ext in (".jpg", ".jpeg"):
        return contents[:3] == b"\xff\xd8\xff"
    if ext == ".png":
        return contents[:8] == b"\x89PNG\r\n\x1a\n"
    if ext == ".gif":
        return contents[:6] in (b"GIF87a", b"GIF89a")
    if ext == ".webp":
        return contents[:4] == b"RIFF" and contents[8:12] == b"WEBP"
    return False


async def save_image(file: UploadFile | None) -> str | None:
    if file is None or file.filename == "":
        return None

    ext = os.path.splitext(file.filename)[1].lower()
    if ext not in ALLOWED_EXTENSIONS:
        raise HTTPException(status_code=400, detail="jpg, png, gif, webp 파일만 업로드 가능합니다")

    contents = await file.read()
    if len(contents) > MAX_FILE_SIZE:
        raise HTTPException(status_code=400, detail="파일 크기는 10MB 이하여야 합니다")

    if not _validate_magic_bytes(contents, ext):
        raise HTTPException(status_code=400, detail="파일 내용이 이미지 형식과 일치하지 않습니다")

    # 현재 상황: UUID를 파일명으로 사용해 사용자 파일명 충돌을 피합니다.
    # 목적: DB에는 이 경로를 저장하고, 프론트는 /uploads 정적 경로로 이미지를 불러옵니다.
    filename = f"{uuid.uuid4()}{ext}"
    filepath = os.path.join(UPLOAD_DIR, filename)

    with open(filepath, "wb") as f:
        f.write(contents)

    return filepath


def delete_image(image_path: str | None):
    # 현재 상황: 게시글 삭제 또는 이미지 교체 시 기존 파일을 정리합니다.
    # 목적: DB에서 사라진 게시글의 이미지 파일이 서버에 계속 남지 않도록 합니다.
    if image_path and os.path.exists(image_path):
        os.remove(image_path)
