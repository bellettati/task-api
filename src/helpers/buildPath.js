export default function buildPath(path) {
	const paramRegex = /:([a-zA-Z]+)/g
	const pathParamRegex = path.replace(paramRegex, '(?<$1>[a-zA-Z0-9\-_]+)')
	const pathParamQueryRegex = new RegExp(`^${pathParamRegex}(?<query>\\?(.*))?$`)
	return pathParamQueryRegex
}