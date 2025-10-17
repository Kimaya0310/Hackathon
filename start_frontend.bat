@echo off
echo ========================================
echo  Smart AutoSense - Frontend Server
echo ========================================
echo.

cd frontend

echo Checking Node.js installation...
node --version
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    pause
    exit /b 1
)

echo.
echo Checking dependencies...
if not exist "node_modules" (
    echo Installing dependencies...
    call npm install
    echo Dependencies installed!
)

echo.
echo ========================================
echo  Starting Frontend Server...
echo ========================================
echo.
echo Opening browser at http://localhost:3001
echo.
call npm start

pause

