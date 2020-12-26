<template lang="jade">
  .hello
    .ui.container.grid
      #poet.two.column.doubling.row
        .five.wide.column
        .six.wide.column.ui.teal.segment
          h1 拾詩氏
          img(src="http://lorempixel.com/400/200/animals/")
          hr
          .ui.list
            .item(v-for = "(p,idx) in poet" v-bind:key = "p + idx")
              h2 {{ parse(p) }}
      //.one.column.row
        .column.ui.segment
          InArticleAdsense(data-ad-client="ca-pub-7209910540592367", data-ad-slot="8130621052")
      .one.column.row
        .column
          a.ui.huge.green.button(onclick = "location.reload()") 再來！
      .one.column.row
        .column
          .fb-comments(data-href="http://xikxik.bestian.tw" data-width="" data-numposts="5")
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      today: new Date()
    }
  },
  props: ['xikxik', 'newsList', 'poet'],
  methods: {
    p: function (k) {
      var list = this.xikxik[k]
      var r = Math.floor(Math.random() * list.length)
      return list[r]
    },
    parse: function (str) {
      var ans = str
      var list = Object.keys(this.xikxik).sort(function (a, b) { return b.length - a.length })
      for (var i = 0; i < list.length; i++) {
        var k = list[i]
        if (str.indexOf(k) > -1) {
          ans = ans.replace(k, this.p(k))
        }
      }
      var good = true
      for (var i$ = 0; i$ < list.length; i$++) {
        var j = list[i$]
        if (ans.indexOf(j) > -1) {
          good = false
        }
      }
      if (good) {
        return ans
      } else {
        return this.parse(ans)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}

#poet {
  font-family: 'Microsoft JhengHei', 'DFKai-SB', 'PMingLiU', 'Heiti TC', 'LiHei Pro', 'BiauKai';
}
</style>
