export default {
	fetch(request: Request, env: any, ctx: ExecutionContext): Response {
		const stream = new ReadableStream({
			start(controller) {
				setInterval(() => {
					controller.enqueue(
						new TextEncoder().encode(`${new Date().toISOString()}\n`)
					);
				}, 2500);
			},
		});
		return new Response(stream);
	},
};
