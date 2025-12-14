@echo off
setlocal enabledelayedexpansion

set /p title="Enter post title: "
set /p category="Enter category (frontend/backend/tools): "

REM Generate filename from title (replace spaces with hyphens)
set filename=%title: =-%

REM Get current date
for /f "tokens=1-3 delims=/" %%a in ('echo %date%') do (
    set year=%%a
    set month=%%b
    set day=%%c
)
set currentdate=%year%-%month%-%day%

REM Create the post file
echo --->> "docs\posts\%filename%.md"
echo title: %title%>> "docs\posts\%filename%.md"
echo date: %currentdate%>> "docs\posts\%filename%.md"
echo category: %category%>> "docs\posts\%filename%.md"
echo tags:>> "docs\posts\%filename%.md"
echo   - tag1>> "docs\posts\%filename%.md"
echo --->> "docs\posts\%filename%.md"
echo.>> "docs\posts\%filename%.md"
echo # %title%>> "docs\posts\%filename%.md"
echo.>> "docs\posts\%filename%.md"
echo Write your content here...>> "docs\posts\%filename%.md"

echo.
echo Post created: docs\posts\%filename%.md
echo Don't forget to update sidebar in docs\.vitepress\config.mts
pause
