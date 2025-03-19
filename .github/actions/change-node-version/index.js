const core = require('@actions/core');
const fs = require('fs');

const modifyPackageJson = (moduleName, packageFile, version) => {
	const content = fs.readFileSync(packageFile, 'utf8');
	const packageJson = JSON.parse(content);
	core.notice(`Version of module[${moduleName}] updated to ${version} from ${packageJson.version}.`);
	packageJson.version = version;
	['dependencies', 'devDependencies'].forEach(key => {
		if (packageJson[key] != null) {
			Object.keys(packageJson[key]).forEach(name => {
				if (name.startsWith('@rainbow-n19/')) {
					packageJson[key][name] = version;
				}
			});
		}
	});
	const newContent = JSON.stringify(packageJson, null, '\t');
	fs.writeFileSync(packageFile, newContent, 'utf8');
}
