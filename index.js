/*const foo = {template:'<div>Foo</div>'}
const bar = {template:'<div>Bar</div>'}
const router = new VueRouter({
	routes:[
		{path:'/foo',component:foo},
		{path:'/bar',component:bar}
	]
})
const vm = new Vue({
	router
}).$mount('#app')
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
  { path: '/foo', component: Foo },
  { path: '/bar', component: Bar }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
const app = new Vue({
  router
}).$mount('#app')*/
/*const User = {
  template: '<div class="user"><h2>User {{ $route.params.id }}</h2><router-view></router-view></div>'
}

const UserHome = { template: '<div>Home</div>' }
const UserProfile = { template: '<div>Profile</div>' }
const UserPosts = { template: '<div>Posts</div>' }

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User,
      children: [
        // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: '', component: UserHome },
				
        // UserProfile will be rendered inside User's <router-view>
        // when /user/:id/profile is matched
        { path: 'profile', component: UserProfile },

        // UserPosts will be rendered inside User's <router-view>
        // when /user/:id/posts is matched
        { path: 'posts', component: UserPosts }
      ]
    }
  ]
})

const app = new Vue({ router }).$mount('#app')*/
// const Foo = { template: '<div>foo</div>' }
// const Bar = { template: '<div>bar</div>' }
// const Baz = { template: '<div>baz</div>' }

// const router = new VueRouter({
// 	mode: 'history',
//   	routes: [
//     { path: '/a',
//       component:Foo,
//       beforeEnter: (to, from, next) => {
// 	        console.log('小弟B：哎呀妈呀！大兄弟，这是要去哪呀？', to)
// 	        console.log('小弟A：大兄弟，哪儿旮沓的呀！', from)
// 	        next() // 大哥：过去吧！
// 	        // 调用next通过路由
// 	  }
// 	}
//   ]
// })

// new Vue({
// 	router,
//   el: '#app'
// })
/*Vue.component('todo-item', {
  template: `
    <li>
      {{ title }}
      <button v-on:click="$emit('remove')">X</button>
    </li>
  `,
  props: ['title']
})
new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      'Do the dishes',
      'Take out the trash',
      'Mow the lawn'
    ]
  },
  methods: {
    addNewTodo: function () {
      this.todos.push(this.newTodoText)
      this.newTodoText = ''
    }
  }
})*/
var myDate = new Date();
var now = myDate.getFullYear()+'-'+(myDate.getMonth()+1)+'-'+myDate.getDate();
Vue.component('list-item',{
  props:['parent','username'],
  template:`
    <div class="list-column">
      <div class="list-column-head">
        <img src="timg.jpg">
        <div class="info">
          <h4 class="info-user"><a class="#">{{username}}</a></h4>
          <a class="reply">回复</a>
          <span class="comment-date">{{now}}</span>
        </div>
      </div>
      <div class="list-column-body">
        <p>{{parent}}</p>
      </div>
    </div>
    `,
  data(){
    return {
      now
    }
  }
})
var vm = new Vue({
  el:'#todo-list-example',
  data:{
    comment:0,
    message:'游客007',
    text:'',
    num:0,
    items:[
    ],
    listName:[
    ]
  },
  methods:{
    addNewComment: function () {
      this.items.push(this.text);
      this.listName.push(this.message);
      this.comment=this.items.length;
      this.text='';
    },
    activeBtn: function () {
        var num = 0;
        var oUser = document.getElementById('user');
        var timer=setInterval(function(){   
            if(oUser.offsetHeight>=58){
              clearInterval(timer);
            }else{
              num+=8;
              oUser.style.height=num+'px';
            }
        },30);
    }
  }
})
