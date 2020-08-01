cd builds
echo "Recent:"
echo "$(ls -1 *.xpi | tail -n 5)"
echo ""
cd ..

echo -n "Version:"
read ver

name="pwdmgr_$ver.xpi"
zip -r -FS builds/$name img/ src/index.html LICENSE manifest.json src/pwd.js README.md src/sha512.min.js
