module.exports = function(){
	var stack = new Error().stack;

	stack = stack.split("\n");
	stack.shift();

	stack = stack.map(element => element.trim());
	stack = stack.map(element => element.substring(3))

	console.log(stack);
};
