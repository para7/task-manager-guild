dev: node_modules
	pnpm dlx npm-run-all dev:all

node_modules: package.json pnpm-lock.yaml
	pnpm install --frozen-lockfile