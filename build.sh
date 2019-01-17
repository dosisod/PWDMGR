cd builds
echo "Recent:"
echo "$(ls -1 *.xpi | tail -n 5)"
echo ""
cd ..

echo -n "Version:"
read ver

name="pwdmgr_$ver.xpi"
zip -r -FS builds/$name img/ index.html LICENSE manifest.json pwd.js README.md sha512.js
