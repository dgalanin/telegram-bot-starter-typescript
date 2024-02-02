interface ILogProps {
	logMessage: string
	logObject: object
}

export const sendLog = ({ logMessage, logObject }: ILogProps) => {
	// NOTE: write your own logs
	console.log(logMessage, logObject)
}
