/*
 This is the entry point of your worker.
 you can change the entry point by changing the 'main' in your  
 wrangler.toml file.
 */

export default {
	/*
	This export exposes a fetch listener for your code.
	Any time your worker recieves a fetch request, this piece of code gets executed.
	It is mandatory to have an export default in your entry point, with one of the 
	given event listeners
	*/
	async fetch(request, env, ctx) {
		return new Response('Hello World!');
	},
};
