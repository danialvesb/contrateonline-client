<template>
  <dashboard-template>
    <template v-slot:header>
      <ui-header v-on:checkboxToggleHeader="toogleSideBar($event)">
        <template v-slot:navbar-right>
          <dropdown title="" icon=""
                    :options="optionsDropdown"/>
        </template>
      </ui-header>
    </template>
    <template v-slot:breadcrumbs>
      <ui-breadcrumbs>
        <li>Detalhes da solicitação</li>
      </ui-breadcrumbs>
    </template>
    <template v-slot:sidebar>
      <ui-menu-side-bar/>
    </template>
    <template v-slot:content>
      <div :class="[{'disabled': isActiveSideBar},'card-container']" >
        <div class="card-header">
      <span class="title-card">
        <a>Detalhes da oferta</a>
      </span>
        </div>
        <div class="card-body">
          <div class="content">
            <div class="content-user">
              <div class="element-profile">
                <img :src="require('@/assets/imgs/user-silhouette.svg')">
              </div>
              <div class="user-name">
          <span>
            <p>Jane</p>
          </span>
                <span>
            <small>Pessoa física</small>
          </span>
              </div>
              <div class="user-rating">
                <font-awesome-icon icon="star"/>
                <font-awesome-icon icon="star"/>
                <font-awesome-icon icon="star"/>
                <font-awesome-icon icon="star"/>
                <font-awesome-icon icon="star"/>
              </div>
            </div>
            <div class="content-table">
              <table id="details">
                <tr>
                  <td>Típo de seviço:</td>
                  <td>Conserto de computadores</td>
                </tr>
                <tr>
                  <td>Valor cobrado</td>
                  <td>R$ 200,00</td>
                </tr>
                <tr>
                  <td>Localização</td>
                  <td>Goiânia/GO parque tremendão</td>
                </tr>
                <tr>
                  <td>Descrição</td>
                  <td>
                    <div class="text-description">
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                      dadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadadsdadads
                    </div>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
        <div class="button-group">
          <ui-button
            height="80%"
            width="234px"
            color="primary"
            margin="3px"
            @click="back"
            :disabled="isActiveSideBar">
            Voltar
          </ui-button>
          <ui-button
            height="80%"
            width="234px"
            margin="3px"
            color="success"
            :disabled="isActiveSideBar">
            Solicitar
          </ui-button>
        </div>
        <div class="content-gallery">
          <img class="image-item" :src="require('@/assets/imgs/img1.jpg')">
          <img class="image-item" :src="require('@/assets/imgs/img2.jpg')">
          <img class="image-item" :src="require('@/assets/imgs/img3.jpg')">
          <img class="image-item" :src="require('@/assets/imgs/img4.jpg')">
        </div>
      </div>
    </template>
  </dashboard-template>
</template>

<script>

import dashboardTemplate from '@/templates/page-dashboard/index.vue';
import { uiMenuSideBar } from '@/components/menu/index';
import { uiHeader } from '@/components/header/index';
import { dropdown } from '@components/dropdown/index';
import { uiBreadcrumbs } from '@components/breadcrumbs/index';
import { uiButton } from '@components/buttons';

export default {
  components: {
    uiHeader,
    dropdown,
    uiBreadcrumbs,
    uiMenuSideBar,
    dashboardTemplate,
    uiButton,
  },
  name: 'uiOfferDetails',
  computed: {
    isActiveSideBar() {
      return this.$store.getters.isActiveSideBar;
    },
  },
  methods: {
    back() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="scss">
@import "~@/assets/scss/_variables.scss";
@import "~@/views/details/styles.scss";
</style>
