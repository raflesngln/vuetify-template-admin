<template>
  <v-app >
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      enable-resize-watcher
      fixed
      app
    >
<v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Vuetify on Vue
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
    
    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" @click="">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
    <router-link :to="`/${item.path}`"><v-list-tile-title>{{ item.title }}</v-list-tile-title></router-link>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
      
    </v-navigation-drawer>
    <v-toolbar
      app
      :clipped-left="clipped"
    >
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="clipped = !clipped">
        <v-icon>web</v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>


    <!-- for notification -->
       <v-menu bottom offset-y>
          <v-btn slot="activator">A Menu</v-btn>
          <v-list>
            <v-list-tile v-for="(mn, i) in menunotif" :key="i" @click="">
              <v-list-tile-title>{{ mn.title }}</v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-dialog
          v-model="dialog"
          fullscreen
          transition="dialog-bottom-transition"
          :overlay="false"
          scrollable
        >
        </v-dialog>

    <v-badge color="red" overlap>
      <span slot="badge">!</span>
      <v-icon large color="grey">mail</v-icon>
    </v-badge>
      
    </v-toolbar>
<!-- this is for content -->
    <v-content>
      <router-view/>
    </v-content>
<!-- this is for content -->

    <v-navigation-drawer
      temporary
      :right="right"
      v-model="rightDrawer"
      fixed
      app
    >
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>compare_arrows</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Switch drawer (click me)</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    
    <v-footer :fixed="fixed" app>
      <span>&copy; 2017 Vuetify on Vuejs Development</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: true,
      fixed: false,
      items: [
        { icon: 'dashboard', title: 'Home', path:""},
        { icon: 'question_answer', title: 'Profile', path:"profile"},
        { icon: 'bubble_chart', title: 'About', path:"about"},
      ],
      menunotif: [
              {
                title: 'Click Me'
              },
              {
                title: 'Click Me'
              },
              {
                title: 'Click Me'
              },
              {
                title: 'Click Me 2'
              }
            ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify',
      dialog: false

    }
  },
  name: 'App'
}
</script>
<style scopped>
a{
  text-decoration:none;
}

</style>