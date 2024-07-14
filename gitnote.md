#1./ tạo file gittinore
New-Item .gitignore -ItemType File

# khởi tạo fakeapi, không tạo filte trên githup
## …or create a new repository on the command line
- echo "# fakeapi" >> README.md
- git init
- git add README.md
- git commit -m "first commit"
- git branch -M main
- git remote add origin https://github.com/vovinhloc/fakeapi.git
- git push -u origin main

## …or push an existing repository from the command line

git remote add origin https://github.com/vovinhloc/fakeapi.git
git branch -M main
git push -u origin main