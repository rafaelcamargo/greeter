module.exports = {
  greet: function(name){
    const greeting = name ? `Hello, ${name}!` : 'Hello!';
    console.log(greeting);
  }
};
