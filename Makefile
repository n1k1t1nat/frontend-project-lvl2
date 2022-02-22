install:
	npm ci

publish:
	npm publish --dry-run
	npm link

lint:
	npx eslint .

gendiff:
	node bin/gendiff.js

test:
	NODE_OPTIONS=--experimental-vm-modules npx jest

test-coverage:
	NODE_OPTIONS=--experimental-vm-modules npx jest --coverage