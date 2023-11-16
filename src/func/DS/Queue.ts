import {MessageProperties, MessageRole} from "@/app/context/document-selection.context";

class Queue<T>{
	private _store: T[] = [];

	constructor() {
		this._store = [];
	}

	isEmpty(): boolean {
		return this._store.length === 0;
	}

	push(value: T): void {
		this._store.push(value);
	}

	pop(): T | undefined {
		return this._store.shift();
	}

	peek(): T | undefined {
		return this._store[0];
	}

	get length(): number {
		return this._store.length;
	}

	toString(): string {
		return this._store.toString();
	}
	
	toArray(): T[] {
		return this._store;
	}
}

export default Queue;

export const DummyQueue = (): Queue<MessageProperties> => {
	const queue = new Queue<MessageProperties>();
	queue.push(
		{
			message: "Hello",
			role: MessageRole.USER,
			timestamp: new Date("2021-01-01T00:00:00.000Z")
		}
	)
	queue.push(
		{
			message: "Hello",
			role: MessageRole.GPT,
			timestamp: new Date("2021-01-01T00:00:00.000Z")
		}
	)
	queue.push(
		{
			message: "I wanna ask sthg about this PDF",
			role: MessageRole.USER,
			timestamp: new Date("2021-01-01T00:00:00.000Z")
		}
	)
	queue.push(
		{
			message: "What is it?",
			role: MessageRole.GPT,
			timestamp: new Date("2021-01-01T00:00:00.000Z")
		} )
	
	return queue;
}