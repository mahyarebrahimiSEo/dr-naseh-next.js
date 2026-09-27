@echo off
chcp 65001 > nul
title کلینیک تخصصی دکتر ناصح یوسفی
cd /d "%~dp0"
node scripts\run.js
pause
