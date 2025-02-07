import Layout from '@/layout'

const systemManagementRouter = {
  path: '/table',
  component: Layout,
  // redirect: '/table/complex-table',
  redirect: 'noRedirect',
  name: 'SystemManagement',
  meta: {
    title: '系统管理',
    icon: 'component'
  },
  children: [
    {
      path: 'user-manage-table',
      component: () => import('@/views/table/user-manage-table'),
      name: 'UserManagement',
      meta: { title: '用户管理', icon: 'el-icon-user' }
    },
    {
      path: 'role-manage-table',
      component: () => import('@/views/table/role-manage-table'),
      name: 'RoleManagement',
      meta: { title: '角色管理', icon: 'el-icon-s-custom' }
    },
    {
      path: 'action-table',
      component: () => import('@/views/table/action-table'),
      name: 'Action',
      meta: { title: '操作记录', icon: 'el-icon-document' }
    }
  ]
}
export default systemManagementRouter
