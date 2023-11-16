export function convertToAscii(inputString : string)
{
			return inputString.replace(/[^\x00-\x7F]/g, "");
}