@echo off
echo Building VitePress site...
call npm run build

echo.
echo Deploying to GitHub Pages...
cd docs\.vitepress\dist

git init
git add -A
git commit -m "deploy: %date% %time%"

REM 修改下面的仓库地址为你的 GitHub 仓库
REM git push -f git@github.com:your-username/your-repo.git main:gh-pages

echo.
echo Build completed! Output in docs/.vitepress/dist
echo Please configure your GitHub repository URL in this script to enable deployment.
pause
