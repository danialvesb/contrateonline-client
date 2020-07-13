import Vue from 'vue';
import VueRouter from 'vue-router';
import Dashboard from '@/views/dashboard/dashboard.vue';
import Solicitations from '@/views/solicitations/solicitations.vue';
import Chat from '@/views/chat/chat.vue';
import CreateOffer from '@/views/createOffer/createOffer.vue';
import WorkCalls from '@/views/workCalls/workCalls.vue';
import CardDetails from '@/components/cards/details/index.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/inicio',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/solicitacoes',
    name: 'Solicitacoes',
    component: Solicitations,
  },
  {
    path: '/conversas',
    name: 'chat',
    component: Chat,
  },
  {
    path: '/servico/ofertar',
    name: 'createOffer',
    component: CreateOffer,
  },
  {
    path: '/chamados',
    name: 'workCalls',
    component: WorkCalls,
  },
  {
    path: '/oferta/detalhes/{id}',
    name: 'cardDetails',
    component: CardDetails,
  },
  {
    path: '/*',
    redirect: { name: 'Dashboard' },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
