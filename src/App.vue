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
 <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-avatar>
                <img src="https://randomuser.me/api/portraits/men/85.jpg" >
              </v-list-tile-avatar>
              <v-list-tile-content>
                <v-list-tile-title>Rafles Nainggolan</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
    </v-toolbar>
    
<!--for menu -->
 <v-list>
            <v-list-group
              v-model="item.active"
              v-for="item in items"
              :key="item.title"
              :prepend-icon="item.action"
              no-action
            >
              <v-list-tile slot="activator">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile v-for="subItem in item.items" :key="subItem.title" @click="">
                <v-list-tile-content>
    <router-link :to="`/${subItem.path}`"><v-list-tile-title>{{ subItem.title }}</v-list-tile-title></router-link>
                  
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>{{ subItem.action }}</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </v-list-group>
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
        {
          action: 'local_activity',
          title: 'Attractions',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'restaurant',
          title: 'Dining',
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' }
          ]
        },
        {
          action: 'school',
          title: 'Education',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'settings',
          title: 'Settings',
          active: true,
          items: [
                    { icon: 'dashboard', title: 'Home', path:""},
                    { icon: 'question_answer', title: 'Profile', path:"profile"},
                    { icon: 'bubble_chart', title: 'About', path:"about"}
          ]
        }
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