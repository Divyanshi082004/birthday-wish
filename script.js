// Small shared utilities
(function(){
window.bd_utils = {
getName: ()=> localStorage.getItem('bd_name') || '',
setName: (n)=> localStorage.setItem('bd_name', n)
};
})();