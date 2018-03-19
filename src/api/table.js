// import request from '@/utils/request'

export function getList() {
  return {
    'count': 13,
    'next': 'http://127.0.0.1:8000/asset/?page=2',
    'previous': null,
    'results': [
      {
        'id': 1,
        'asset_name': '这有一台电脑',
        'sn': 'Z2018001',
        'user': '张三',
        'trade_date': '2018-03-01',
        'price': 2000.0,
        'repair_time': null,
        'memo': '',
        'create_date': '2018-03-19T10:46:02.916834',
        'update_date': '2018-03-19T14:26:45.880323',
        'fk_admin': {
          'id': 2,
          'password': 'pbkdf2_sha256$100000$biLdUGdyq4IO$aGFxB90f4up8eJ7x2K4GMjiXi3Tpq6fGVX/ZcL5hT0w=',
          'last_login': null,
          'is_superuser': false,
          'username': 'user',
          'first_name': '',
          'last_name': '',
          'email': '',
          'is_staff': false,
          'is_active': true,
          'date_joined': '2018-03-16T10:49:00',
          'is_equ_admin': false,
          'gender': 'male',
          'mobile': null,
          'image': 'http://127.0.0.1:8000/media/image/default.png',
          'memo': '',
          'create_date': '2018-03-16T11:32:23.641102',
          'update_date': '2018-03-16T11:35:12.605725',
          'department': 1,
          'groups': [],
          'user_permissions': []
        },
        'fk_department': {
          'id': 1,
          'department_name': '运服中心',
          'department_type': 1,
          'memo': '很大的部门',
          'create_date': '2018-03-16T10:42:32.983791',
          'update_date': '2018-03-16T10:42:32.983791'
        },
        'fk_idc': {
          'id': 2,
          'place_name': '中桥智慧水务机房',
          'memo': null,
          'create_date': '2018-03-19T10:24:25.307880',
          'update_date': '2018-03-19T10:24:25.307880'
        },
        'fk_asset_type': {
          'id': 1,
          'asset_type_name': '电脑主机',
          'code': 'Z',
          'memo': null,
          'create_date': '2018-03-19T10:29:28.540400',
          'update_date': '2018-03-19T10:29:28.540400'
        },
        'fk_asset_state': {
          'id': 1,
          'asset_state_name': '在用',
          'memo': '设备正在正常使用',
          'create_date': '2018-03-19T10:26:20.693214',
          'update_date': '2018-03-19T10:26:20.693214'
        },
        'fk_business_unit': {
          'id': 2,
          'name': '普通办公',
          'memo': '部门办公使用',
          'create_date': '2018-03-19T10:20:30.693526',
          'update_date': '2018-03-19T10:20:30.693526'
        },
        'fk_manufactory': {
          'id': 1,
          'manufactory': '联想',
          'support_num': '1234567',
          'address': '这里这里',
          'memo': '',
          'create_date': '2018-03-19T10:17:20.854577',
          'update_date': '2018-03-19T10:17:20.854577'
        },
        'fk_supplier': {
          'id': 1,
          'supplier': '电脑供应商1',
          'support_num': '111111111111',
          'address': '地址111111111',
          'memo': '',
          'create_date': '2018-03-19T10:18:40.187212',
          'update_date': '2018-03-19T10:18:40.187212'
        },
        'tags': [
          {
            'id': 2,
            'tag_name': '还在保修中',
            'memo': null,
            'create_date': '2018-03-19T10:25:18.038369',
            'update_date': '2018-03-19T10:25:18.038369'
          }
        ]
      },
      {
        'id': 2,
        'asset_name': '打印机',
        'sn': 'D2018001',
        'user': '全体',
        'trade_date': '2018-03-09',
        'price': 3000.0,
        'repair_time': null,
        'memo': '',
        'create_date': '2018-03-19T10:47:10.255305',
        'update_date': '2018-03-19T10:47:10.255305',
        'fk_admin': {
          'id': 2,
          'password': 'pbkdf2_sha256$100000$biLdUGdyq4IO$aGFxB90f4up8eJ7x2K4GMjiXi3Tpq6fGVX/ZcL5hT0w=',
          'last_login': null,
          'is_superuser': false,
          'username': 'user',
          'first_name': '',
          'last_name': '',
          'email': '',
          'is_staff': false,
          'is_active': true,
          'date_joined': '2018-03-16T10:49:00',
          'is_equ_admin': false,
          'gender': 'male',
          'mobile': null,
          'image': 'http://127.0.0.1:8000/media/image/default.png',
          'memo': '',
          'create_date': '2018-03-16T11:32:23.641102',
          'update_date': '2018-03-16T11:35:12.605725',
          'department': 1,
          'groups': [],
          'user_permissions': []
        },
        'fk_department': {
          'id': 1,
          'department_name': '运服中心',
          'department_type': 1,
          'memo': '很大的部门',
          'create_date': '2018-03-16T10:42:32.983791',
          'update_date': '2018-03-16T10:42:32.983791'
        },
        'fk_idc': {
          'id': 1,
          'place_name': '部门机房',
          'memo': null,
          'create_date': '2018-03-19T10:21:00.069134',
          'update_date': '2018-03-19T10:21:00.069134'
        },
        'fk_asset_type': {
          'id': 3,
          'asset_type_name': '打印/复印/一体机',
          'code': 'D',
          'memo': null,
          'create_date': '2018-03-19T10:30:22.676765',
          'update_date': '2018-03-19T10:30:22.676765'
        },
        'fk_asset_state': {
          'id': 1,
          'asset_state_name': '在用',
          'memo': '设备正在正常使用',
          'create_date': '2018-03-19T10:26:20.693214',
          'update_date': '2018-03-19T10:26:20.693214'
        },
        'fk_business_unit': {
          'id': 2,
          'name': '普通办公',
          'memo': '部门办公使用',
          'create_date': '2018-03-19T10:20:30.693526',
          'update_date': '2018-03-19T10:20:30.693526'
        },
        'fk_manufactory': {
          'id': 3,
          'manufactory': '惠普',
          'support_num': '222222222',
          'address': '地址地址地址1',
          'memo': '',
          'create_date': '2018-03-19T10:18:00.462836',
          'update_date': '2018-03-19T10:18:00.462836'
        },
        'fk_supplier': {
          'id': 2,
          'supplier': '打印机供应商1',
          'support_num': '222131321321',
          'address': '地址222222222',
          'memo': '',
          'create_date': '2018-03-19T10:18:55.100557',
          'update_date': '2018-03-19T10:18:55.100557'
        },
        'tags': [
          {
            'id': 2,
            'tag_name': '还在保修中',
            'memo': null,
            'create_date': '2018-03-19T10:25:18.038369',
            'update_date': '2018-03-19T10:25:18.038369'
          }
        ]
      },
      {
        'id': 3,
        'asset_name': '又是一个打法',
        'sn': 'A2018010',
        'user': '大师傅',
        'trade_date': '2018-03-07',
        'price': 5000.0,
        'repair_time': 24,
        'memo': '',
        'create_date': '2018-03-19T15:59:31.103775',
        'update_date': '2018-03-19T15:59:31.103775',
        'fk_admin': {
          'id': 2,
          'password': 'pbkdf2_sha256$100000$biLdUGdyq4IO$aGFxB90f4up8eJ7x2K4GMjiXi3Tpq6fGVX/ZcL5hT0w=',
          'last_login': null,
          'is_superuser': false,
          'username': 'user',
          'first_name': '',
          'last_name': '',
          'email': '',
          'is_staff': false,
          'is_active': true,
          'date_joined': '2018-03-16T10:49:00',
          'is_equ_admin': false,
          'gender': 'male',
          'mobile': null,
          'image': 'http://127.0.0.1:8000/media/image/default.png',
          'memo': '',
          'create_date': '2018-03-16T11:32:23.641102',
          'update_date': '2018-03-16T11:35:12.605725',
          'department': 1,
          'groups': [],
          'user_permissions': []
        },
        'fk_department': {
          'id': 2,
          'department_name': '生产质量处',
          'department_type': 1,
          'memo': '测试生成！',
          'create_date': '2018-03-16T14:21:26.426861',
          'update_date': '2018-03-16T14:21:26.427864'
        },
        'fk_idc': {
          'id': 3,
          'place_name': '总公司机房',
          'memo': null,
          'create_date': '2018-03-19T10:24:33.182758',
          'update_date': '2018-03-19T10:24:33.182758'
        },
        'fk_asset_type': {
          'id': 4,
          'asset_type_name': '笔记本',
          'code': 'B',
          'memo': null,
          'create_date': '2018-03-19T10:30:32.712588',
          'update_date': '2018-03-19T10:30:32.712588'
        },
        'fk_asset_state': {
          'id': 1,
          'asset_state_name': '在用',
          'memo': '设备正在正常使用',
          'create_date': '2018-03-19T10:26:20.693214',
          'update_date': '2018-03-19T10:26:20.693214'
        },
        'fk_business_unit': {
          'id': 3,
          'name': '财务',
          'memo': '和钱打交道',
          'create_date': '2018-03-19T10:20:49.139480',
          'update_date': '2018-03-19T10:20:49.139480'
        },
        'fk_manufactory': {
          'id': 1,
          'manufactory': '联想',
          'support_num': '1234567',
          'address': '这里这里',
          'memo': '',
          'create_date': '2018-03-19T10:17:20.854577',
          'update_date': '2018-03-19T10:17:20.854577'
        },
        'fk_supplier': {
          'id': 4,
          'supplier': '电脑供应商2',
          'support_num': '132132156',
          'address': '地址23123123123',
          'memo': '',
          'create_date': '2018-03-19T10:19:33.476479',
          'update_date': '2018-03-19T10:19:33.476479'
        },
        'tags': [
          {
            'id': 1,
            'tag_name': '经常坏',
            'memo': null,
            'create_date': '2018-03-19T10:24:44.395496',
            'update_date': '2018-03-19T10:24:44.395496'
          },
          {
            'id': 2,
            'tag_name': '还在保修中',
            'memo': null,
            'create_date': '2018-03-19T10:25:18.038369',
            'update_date': '2018-03-19T10:25:18.038369'
          }
        ]
      },
      {
        'id': 4,
        'asset_name': '在一个显示器',
        'sn': 'A2015780',
        'user': 'DF',
        'trade_date': '2018-01-02',
        'price': 33.0,
        'repair_time': 12,
        'memo': '',
        'create_date': '2018-03-19T16:00:38.325131',
        'update_date': '2018-03-19T16:00:38.325131',
        'fk_admin': {
          'id': 2,
          'password': 'pbkdf2_sha256$100000$biLdUGdyq4IO$aGFxB90f4up8eJ7x2K4GMjiXi3Tpq6fGVX/ZcL5hT0w=',
          'last_login': null,
          'is_superuser': false,
          'username': 'user',
          'first_name': '',
          'last_name': '',
          'email': '',
          'is_staff': false,
          'is_active': true,
          'date_joined': '2018-03-16T10:49:00',
          'is_equ_admin': false,
          'gender': 'male',
          'mobile': null,
          'image': 'http://127.0.0.1:8000/media/image/default.png',
          'memo': '',
          'create_date': '2018-03-16T11:32:23.641102',
          'update_date': '2018-03-16T11:35:12.605725',
          'department': 1,
          'groups': [],
          'user_permissions': []
        },
        'fk_department': {
          'id': 3,
          'department_name': '信息管理处',
          'department_type': 1,
          'memo': '测试生成！',
          'create_date': '2018-03-16T14:21:26.539132',
          'update_date': '2018-03-16T14:21:26.539132'
        },
        'fk_idc': {
          'id': 1,
          'place_name': '部门机房',
          'memo': null,
          'create_date': '2018-03-19T10:21:00.069134',
          'update_date': '2018-03-19T10:21:00.069134'
        },
        'fk_asset_type': {
          'id': 2,
          'asset_type_name': '显示器',
          'code': 'X',
          'memo': null,
          'create_date': '2018-03-19T10:29:39.988870',
          'update_date': '2018-03-19T10:29:39.988870'
        },
        'fk_asset_state': {
          'id': 2,
          'asset_state_name': '故障',
          'memo': '设备出现故障',
          'create_date': '2018-03-19T10:26:52.194114',
          'update_date': '2018-03-19T10:26:52.194114'
        },
        'fk_business_unit': {
          'id': 1,
          'name': '调度系统',
          'memo': '很重要的一个系统',
          'create_date': '2018-03-19T10:19:50.020496',
          'update_date': '2018-03-19T10:19:50.020496'
        },
        'fk_manufactory': {
          'id': 1,
          'manufactory': '联想',
          'support_num': '1234567',
          'address': '这里这里',
          'memo': '',
          'create_date': '2018-03-19T10:17:20.854577',
          'update_date': '2018-03-19T10:17:20.854577'
        },
        'fk_supplier': {
          'id': 4,
          'supplier': '电脑供应商2',
          'support_num': '132132156',
          'address': '地址23123123123',
          'memo': '',
          'create_date': '2018-03-19T10:19:33.476479',
          'update_date': '2018-03-19T10:19:33.476479'
        },
        'tags': [
          {
            'id': 3,
            'tag_name': '空',
            'memo': '无状态',
            'create_date': '2018-03-19T10:47:30.351918',
            'update_date': '2018-03-19T10:47:30.351918'
          }
        ]
      },
      {
        'id': 5,
        'asset_name': '在一个服务器',
        'sn': 'F1201005',
        'user': 'ERER',
        'trade_date': '2018-03-02',
        'price': 6666.0,
        'repair_time': 48,
        'memo': '',
        'create_date': '2018-03-19T16:01:46.656242',
        'update_date': '2018-03-19T16:01:46.656242',
        'fk_admin': {
          'id': 2,
          'password': 'pbkdf2_sha256$100000$biLdUGdyq4IO$aGFxB90f4up8eJ7x2K4GMjiXi3Tpq6fGVX/ZcL5hT0w=',
          'last_login': null,
          'is_superuser': false,
          'username': 'user',
          'first_name': '',
          'last_name': '',
          'email': '',
          'is_staff': false,
          'is_active': true,
          'date_joined': '2018-03-16T10:49:00',
          'is_equ_admin': false,
          'gender': 'male',
          'mobile': null,
          'image': 'http://127.0.0.1:8000/media/image/default.png',
          'memo': '',
          'create_date': '2018-03-16T11:32:23.641102',
          'update_date': '2018-03-16T11:35:12.605725',
          'department': 1,
          'groups': [],
          'user_permissions': []
        },
        'fk_department': {
          'id': 4,
          'department_name': '城南分公司',
          'department_type': 2,
          'memo': '测试生成！',
          'create_date': '2018-03-16T14:21:26.650428',
          'update_date': '2018-03-16T14:21:26.650428'
        },
        'fk_idc': {
          'id': 1,
          'place_name': '部门机房',
          'memo': null,
          'create_date': '2018-03-19T10:21:00.069134',
          'update_date': '2018-03-19T10:21:00.069134'
        },
        'fk_asset_type': {
          'id': 1,
          'asset_type_name': '电脑主机',
          'code': 'Z',
          'memo': null,
          'create_date': '2018-03-19T10:29:28.540400',
          'update_date': '2018-03-19T10:29:28.540400'
        },
        'fk_asset_state': {
          'id': 3,
          'asset_state_name': '停用',
          'memo': '设备空闲不在使用状态',
          'create_date': '2018-03-19T10:27:25.502478',
          'update_date': '2018-03-19T10:27:25.502478'
        },
        'fk_business_unit': {
          'id': 3,
          'name': '财务',
          'memo': '和钱打交道',
          'create_date': '2018-03-19T10:20:49.139480',
          'update_date': '2018-03-19T10:20:49.139480'
        },
        'fk_manufactory': {
          'id': 2,
          'manufactory': '思科',
          'support_num': '300000',
          'address': '不知道哪里',
          'memo': '',
          'create_date': '2018-03-19T10:17:37.090570',
          'update_date': '2018-03-19T10:17:37.090570'
        },
        'fk_supplier': {
          'id': 3,
          'supplier': '显示器供应商1',
          'support_num': '123131321',
          'address': '地址131321',
          'memo': '',
          'create_date': '2018-03-19T10:19:13.323882',
          'update_date': '2018-03-19T10:19:13.323882'
        },
        'tags': [
          {
            'id': 2,
            'tag_name': '还在保修中',
            'memo': null,
            'create_date': '2018-03-19T10:25:18.038369',
            'update_date': '2018-03-19T10:25:18.038369'
          }
        ]
      },
      {
        'id': 6,
        'asset_name': '又是一个笔记本',
        'sn': 'B2018071',
        'user': 'SDF',
        'trade_date': '2018-03-03',
        'price': 12301.0,
        'repair_time': 20,
        'memo': '',
        'create_date': '2018-03-19T16:02:59.968591',
        'update_date': '2018-03-19T16:02:59.968591',
        'fk_admin': {
          'id': 2,
          'password': 'pbkdf2_sha256$100000$biLdUGdyq4IO$aGFxB90f4up8eJ7x2K4GMjiXi3Tpq6fGVX/ZcL5hT0w=',
          'last_login': null,
          'is_superuser': false,
          'username': 'user',
          'first_name': '',
          'last_name': '',
          'email': '',
          'is_staff': false,
          'is_active': true,
          'date_joined': '2018-03-16T10:49:00',
          'is_equ_admin': false,
          'gender': 'male',
          'mobile': null,
          'image': 'http://127.0.0.1:8000/media/image/default.png',
          'memo': '',
          'create_date': '2018-03-16T11:32:23.641102',
          'update_date': '2018-03-16T11:35:12.605725',
          'department': 1,
          'groups': [],
          'user_permissions': []
        },
        'fk_department': {
          'id': 1,
          'department_name': '运服中心',
          'department_type': 1,
          'memo': '很大的部门',
          'create_date': '2018-03-16T10:42:32.983791',
          'update_date': '2018-03-16T10:42:32.983791'
        },
        'fk_idc': {
          'id': 2,
          'place_name': '中桥智慧水务机房',
          'memo': null,
          'create_date': '2018-03-19T10:24:25.307880',
          'update_date': '2018-03-19T10:24:25.307880'
        },
        'fk_asset_type': {
          'id': 4,
          'asset_type_name': '笔记本',
          'code': 'B',
          'memo': null,
          'create_date': '2018-03-19T10:30:32.712588',
          'update_date': '2018-03-19T10:30:32.712588'
        },
        'fk_asset_state': {
          'id': 4,
          'asset_state_name': '报废',
          'memo': '设备已经报废',
          'create_date': '2018-03-19T10:27:40.853447',
          'update_date': '2018-03-19T10:27:40.853447'
        },
        'fk_business_unit': {
          'id': 1,
          'name': '调度系统',
          'memo': '很重要的一个系统',
          'create_date': '2018-03-19T10:19:50.020496',
          'update_date': '2018-03-19T10:19:50.020496'
        },
        'fk_manufactory': {
          'id': 2,
          'manufactory': '思科',
          'support_num': '300000',
          'address': '不知道哪里',
          'memo': '',
          'create_date': '2018-03-19T10:17:37.090570',
          'update_date': '2018-03-19T10:17:37.090570'
        },
        'fk_supplier': {
          'id': 4,
          'supplier': '电脑供应商2',
          'support_num': '132132156',
          'address': '地址23123123123',
          'memo': '',
          'create_date': '2018-03-19T10:19:33.476479',
          'update_date': '2018-03-19T10:19:33.476479'
        },
        'tags': [
          {
            'id': 1,
            'tag_name': '经常坏',
            'memo': null,
            'create_date': '2018-03-19T10:24:44.395496',
            'update_date': '2018-03-19T10:24:44.395496'
          }
        ]
      },
      {
        'id': 7,
        'asset_name': '打印机1',
        'sn': 'A1021012',
        'user': 'DFDF',
        'trade_date': '2018-03-03',
        'price': 1230.0,
        'repair_time': 10,
        'memo': '',
        'create_date': '2018-03-19T16:03:58.523228',
        'update_date': '2018-03-19T16:03:58.523228',
        'fk_admin': {
          'id': 1,
          'password': 'pbkdf2_sha256$100000$RMmsBEX0RV5F$/KYgr4wEOUJgLXJ975rWzD19zGe26mtrMJoFeUBlJ1k=',
          'last_login': '2018-03-19T15:58:02.290346',
          'is_superuser': true,
          'username': 'admin',
          'first_name': '张飞',
          'last_name': '',
          'email': '',
          'is_staff': true,
          'is_active': true,
          'date_joined': '2018-03-15T15:30:00',
          'is_equ_admin': false,
          'gender': 'male',
          'mobile': null,
          'image': 'http://127.0.0.1:8000/media/image/default.png',
          'memo': '',
          'create_date': '2018-03-16T11:32:23.641102',
          'update_date': '2018-03-16T11:32:23.660153',
          'department': 1,
          'groups': [],
          'user_permissions': []
        },
        'fk_department': {
          'id': 3,
          'department_name': '信息管理处',
          'department_type': 1,
          'memo': '测试生成！',
          'create_date': '2018-03-16T14:21:26.539132',
          'update_date': '2018-03-16T14:21:26.539132'
        },
        'fk_idc': {
          'id': 3,
          'place_name': '总公司机房',
          'memo': null,
          'create_date': '2018-03-19T10:24:33.182758',
          'update_date': '2018-03-19T10:24:33.182758'
        },
        'fk_asset_type': {
          'id': 3,
          'asset_type_name': '打印/复印/一体机',
          'code': 'D',
          'memo': null,
          'create_date': '2018-03-19T10:30:22.676765',
          'update_date': '2018-03-19T10:30:22.676765'
        },
        'fk_asset_state': {
          'id': 5,
          'asset_state_name': '维修中',
          'memo': '已经申请维修，未修好',
          'create_date': '2018-03-19T10:28:06.622875',
          'update_date': '2018-03-19T10:28:06.622875'
        },
        'fk_business_unit': {
          'id': 2,
          'name': '普通办公',
          'memo': '部门办公使用',
          'create_date': '2018-03-19T10:20:30.693526',
          'update_date': '2018-03-19T10:20:30.693526'
        },
        'fk_manufactory': {
          'id': 3,
          'manufactory': '惠普',
          'support_num': '222222222',
          'address': '地址地址地址1',
          'memo': '',
          'create_date': '2018-03-19T10:18:00.462836',
          'update_date': '2018-03-19T10:18:00.462836'
        },
        'fk_supplier': {
          'id': 2,
          'supplier': '打印机供应商1',
          'support_num': '222131321321',
          'address': '地址222222222',
          'memo': '',
          'create_date': '2018-03-19T10:18:55.100557',
          'update_date': '2018-03-19T10:18:55.100557'
        },
        'tags': [
          {
            'id': 3,
            'tag_name': '空',
            'memo': '无状态',
            'create_date': '2018-03-19T10:47:30.351918',
            'update_date': '2018-03-19T10:47:30.351918'
          }
        ]
      },
      {
        'id': 8,
        'asset_name': '这次没有电脑',
        'sn': 'E20150147',
        'user': 'DASF',
        'trade_date': '2018-03-19',
        'price': 123.0,
        'repair_time': 8,
        'memo': '',
        'create_date': '2018-03-19T16:05:39.170218',
        'update_date': '2018-03-19T16:06:27.350292',
        'fk_admin': {
          'id': 1,
          'password': 'pbkdf2_sha256$100000$RMmsBEX0RV5F$/KYgr4wEOUJgLXJ975rWzD19zGe26mtrMJoFeUBlJ1k=',
          'last_login': '2018-03-19T15:58:02.290346',
          'is_superuser': true,
          'username': 'admin',
          'first_name': '张飞',
          'last_name': '',
          'email': '',
          'is_staff': true,
          'is_active': true,
          'date_joined': '2018-03-15T15:30:00',
          'is_equ_admin': false,
          'gender': 'male',
          'mobile': null,
          'image': 'http://127.0.0.1:8000/media/image/default.png',
          'memo': '',
          'create_date': '2018-03-16T11:32:23.641102',
          'update_date': '2018-03-16T11:32:23.660153',
          'department': 1,
          'groups': [],
          'user_permissions': []
        },
        'fk_department': {
          'id': 6,
          'department_name': '雪浪水厂',
          'department_type': 3,
          'memo': '测试生成！',
          'create_date': '2018-03-16T14:21:26.814867',
          'update_date': '2018-03-16T14:21:26.814867'
        },
        'fk_idc': {
          'id': 3,
          'place_name': '总公司机房',
          'memo': null,
          'create_date': '2018-03-19T10:24:33.182758',
          'update_date': '2018-03-19T10:24:33.182758'
        },
        'fk_asset_type': {
          'id': 1,
          'asset_type_name': '电脑主机',
          'code': 'Z',
          'memo': null,
          'create_date': '2018-03-19T10:29:28.540400',
          'update_date': '2018-03-19T10:29:28.540400'
        },
        'fk_asset_state': {
          'id': 5,
          'asset_state_name': '维修中',
          'memo': '已经申请维修，未修好',
          'create_date': '2018-03-19T10:28:06.622875',
          'update_date': '2018-03-19T10:28:06.622875'
        },
        'fk_business_unit': {
          'id': 1,
          'name': '调度系统',
          'memo': '很重要的一个系统',
          'create_date': '2018-03-19T10:19:50.020496',
          'update_date': '2018-03-19T10:19:50.020496'
        },
        'fk_manufactory': {
          'id': 2,
          'manufactory': '思科',
          'support_num': '300000',
          'address': '不知道哪里',
          'memo': '',
          'create_date': '2018-03-19T10:17:37.090570',
          'update_date': '2018-03-19T10:17:37.090570'
        },
        'fk_supplier': {
          'id': 4,
          'supplier': '电脑供应商2',
          'support_num': '132132156',
          'address': '地址23123123123',
          'memo': '',
          'create_date': '2018-03-19T10:19:33.476479',
          'update_date': '2018-03-19T10:19:33.476479'
        },
        'tags': [
          {
            'id': 3,
            'tag_name': '空',
            'memo': '无状态',
            'create_date': '2018-03-19T10:47:30.351918',
            'update_date': '2018-03-19T10:47:30.351918'
          }
        ]
      },
      {
        'id': 9,
        'asset_name': '路由器',
        'sn': 'L2018401',
        'user': '大师傅',
        'trade_date': '2018-03-19',
        'price': 2658.0,
        'repair_time': 60,
        'memo': '',
        'create_date': '2018-03-19T16:07:35.973537',
        'update_date': '2018-03-19T16:07:35.973537',
        'fk_admin': {
          'id': 1,
          'password': 'pbkdf2_sha256$100000$RMmsBEX0RV5F$/KYgr4wEOUJgLXJ975rWzD19zGe26mtrMJoFeUBlJ1k=',
          'last_login': '2018-03-19T15:58:02.290346',
          'is_superuser': true,
          'username': 'admin',
          'first_name': '张飞',
          'last_name': '',
          'email': '',
          'is_staff': true,
          'is_active': true,
          'date_joined': '2018-03-15T15:30:00',
          'is_equ_admin': false,
          'gender': 'male',
          'mobile': null,
          'image': 'http://127.0.0.1:8000/media/image/default.png',
          'memo': '',
          'create_date': '2018-03-16T11:32:23.641102',
          'update_date': '2018-03-16T11:32:23.660153',
          'department': 1,
          'groups': [],
          'user_permissions': []
        },
        'fk_department': {
          'id': 7,
          'department_name': '中桥水厂',
          'department_type': 3,
          'memo': '测试生成！',
          'create_date': '2018-03-16T14:21:26.891070',
          'update_date': '2018-03-16T14:21:26.891070'
        },
        'fk_idc': {
          'id': 2,
          'place_name': '中桥智慧水务机房',
          'memo': null,
          'create_date': '2018-03-19T10:24:25.307880',
          'update_date': '2018-03-19T10:24:25.307880'
        },
        'fk_asset_type': {
          'id': 7,
          'asset_type_name': '路由器',
          'code': 'L',
          'memo': null,
          'create_date': '2018-03-19T10:31:09.791442',
          'update_date': '2018-03-19T10:31:09.791442'
        },
        'fk_asset_state': {
          'id': 1,
          'asset_state_name': '在用',
          'memo': '设备正在正常使用',
          'create_date': '2018-03-19T10:26:20.693214',
          'update_date': '2018-03-19T10:26:20.693214'
        },
        'fk_business_unit': {
          'id': 3,
          'name': '财务',
          'memo': '和钱打交道',
          'create_date': '2018-03-19T10:20:49.139480',
          'update_date': '2018-03-19T10:20:49.139480'
        },
        'fk_manufactory': {
          'id': 3,
          'manufactory': '惠普',
          'support_num': '222222222',
          'address': '地址地址地址1',
          'memo': '',
          'create_date': '2018-03-19T10:18:00.462836',
          'update_date': '2018-03-19T10:18:00.462836'
        },
        'fk_supplier': {
          'id': 1,
          'supplier': '电脑供应商1',
          'support_num': '111111111111',
          'address': '地址111111111',
          'memo': '',
          'create_date': '2018-03-19T10:18:40.187212',
          'update_date': '2018-03-19T10:18:40.187212'
        },
        'tags': [
          {
            'id': 3,
            'tag_name': '空',
            'memo': '无状态',
            'create_date': '2018-03-19T10:47:30.351918',
            'update_date': '2018-03-19T10:47:30.351918'
          }
        ]
      },
      {
        'id': 10,
        'asset_name': '打印机222',
        'sn': 'D2015401',
        'user': '阿什顿',
        'trade_date': '2018-03-07',
        'price': 7452.0,
        'repair_time': 10,
        'memo': '',
        'create_date': '2018-03-19T16:08:53.485036',
        'update_date': '2018-03-19T16:08:53.485036',
        'fk_admin': {
          'id': 1,
          'password': 'pbkdf2_sha256$100000$RMmsBEX0RV5F$/KYgr4wEOUJgLXJ975rWzD19zGe26mtrMJoFeUBlJ1k=',
          'last_login': '2018-03-19T15:58:02.290346',
          'is_superuser': true,
          'username': 'admin',
          'first_name': '张飞',
          'last_name': '',
          'email': '',
          'is_staff': true,
          'is_active': true,
          'date_joined': '2018-03-15T15:30:00',
          'is_equ_admin': false,
          'gender': 'male',
          'mobile': null,
          'image': 'http://127.0.0.1:8000/media/image/default.png',
          'memo': '',
          'create_date': '2018-03-16T11:32:23.641102',
          'update_date': '2018-03-16T11:32:23.660153',
          'department': 1,
          'groups': [],
          'user_permissions': []
        },
        'fk_department': {
          'id': 1,
          'department_name': '运服中心',
          'department_type': 1,
          'memo': '很大的部门',
          'create_date': '2018-03-16T10:42:32.983791',
          'update_date': '2018-03-16T10:42:32.983791'
        },
        'fk_idc': {
          'id': 2,
          'place_name': '中桥智慧水务机房',
          'memo': null,
          'create_date': '2018-03-19T10:24:25.307880',
          'update_date': '2018-03-19T10:24:25.307880'
        },
        'fk_asset_type': {
          'id': 3,
          'asset_type_name': '打印/复印/一体机',
          'code': 'D',
          'memo': null,
          'create_date': '2018-03-19T10:30:22.676765',
          'update_date': '2018-03-19T10:30:22.676765'
        },
        'fk_asset_state': {
          'id': 1,
          'asset_state_name': '在用',
          'memo': '设备正在正常使用',
          'create_date': '2018-03-19T10:26:20.693214',
          'update_date': '2018-03-19T10:26:20.693214'
        },
        'fk_business_unit': {
          'id': 2,
          'name': '普通办公',
          'memo': '部门办公使用',
          'create_date': '2018-03-19T10:20:30.693526',
          'update_date': '2018-03-19T10:20:30.693526'
        },
        'fk_manufactory': {
          'id': 2,
          'manufactory': '思科',
          'support_num': '300000',
          'address': '不知道哪里',
          'memo': '',
          'create_date': '2018-03-19T10:17:37.090570',
          'update_date': '2018-03-19T10:17:37.090570'
        },
        'fk_supplier': {
          'id': 2,
          'supplier': '打印机供应商1',
          'support_num': '222131321321',
          'address': '地址222222222',
          'memo': '',
          'create_date': '2018-03-19T10:18:55.100557',
          'update_date': '2018-03-19T10:18:55.100557'
        },
        'tags': [
          {
            'id': 3,
            'tag_name': '空',
            'memo': '无状态',
            'create_date': '2018-03-19T10:47:30.351918',
            'update_date': '2018-03-19T10:47:30.351918'
          }
        ]
      },
      {
        'id': 11,
        'asset_name': '笔记本234',
        'sn': 'B2014714',
        'user': '地方',
        'trade_date': '2018-03-10',
        'price': 8989.0,
        'repair_time': 12,
        'memo': '',
        'create_date': '2018-03-19T16:09:57.693814',
        'update_date': '2018-03-19T16:09:57.693814',
        'fk_admin': {
          'id': 1,
          'password': 'pbkdf2_sha256$100000$RMmsBEX0RV5F$/KYgr4wEOUJgLXJ975rWzD19zGe26mtrMJoFeUBlJ1k=',
          'last_login': '2018-03-19T15:58:02.290346',
          'is_superuser': true,
          'username': 'admin',
          'first_name': '张飞',
          'last_name': '',
          'email': '',
          'is_staff': true,
          'is_active': true,
          'date_joined': '2018-03-15T15:30:00',
          'is_equ_admin': false,
          'gender': 'male',
          'mobile': null,
          'image': 'http://127.0.0.1:8000/media/image/default.png',
          'memo': '',
          'create_date': '2018-03-16T11:32:23.641102',
          'update_date': '2018-03-16T11:32:23.660153',
          'department': 1,
          'groups': [],
          'user_permissions': []
        },
        'fk_department': {
          'id': 2,
          'department_name': '生产质量处',
          'department_type': 1,
          'memo': '测试生成！',
          'create_date': '2018-03-16T14:21:26.426861',
          'update_date': '2018-03-16T14:21:26.427864'
        },
        'fk_idc': {
          'id': 1,
          'place_name': '部门机房',
          'memo': null,
          'create_date': '2018-03-19T10:21:00.069134',
          'update_date': '2018-03-19T10:21:00.069134'
        },
        'fk_asset_type': {
          'id': 4,
          'asset_type_name': '笔记本',
          'code': 'B',
          'memo': null,
          'create_date': '2018-03-19T10:30:32.712588',
          'update_date': '2018-03-19T10:30:32.712588'
        },
        'fk_asset_state': {
          'id': 2,
          'asset_state_name': '故障',
          'memo': '设备出现故障',
          'create_date': '2018-03-19T10:26:52.194114',
          'update_date': '2018-03-19T10:26:52.194114'
        },
        'fk_business_unit': {
          'id': 3,
          'name': '财务',
          'memo': '和钱打交道',
          'create_date': '2018-03-19T10:20:49.139480',
          'update_date': '2018-03-19T10:20:49.139480'
        },
        'fk_manufactory': {
          'id': 1,
          'manufactory': '联想',
          'support_num': '1234567',
          'address': '这里这里',
          'memo': '',
          'create_date': '2018-03-19T10:17:20.854577',
          'update_date': '2018-03-19T10:17:20.854577'
        },
        'fk_supplier': {
          'id': 4,
          'supplier': '电脑供应商2',
          'support_num': '132132156',
          'address': '地址23123123123',
          'memo': '',
          'create_date': '2018-03-19T10:19:33.476479',
          'update_date': '2018-03-19T10:19:33.476479'
        },
        'tags': [
          {
            'id': 2,
            'tag_name': '还在保修中',
            'memo': null,
            'create_date': '2018-03-19T10:25:18.038369',
            'update_date': '2018-03-19T10:25:18.038369'
          }
        ]
      },
      {
        'id': 12,
        'asset_name': '交换机',
        'sn': 'J2008121',
        'user': '水电费',
        'trade_date': '2018-03-08',
        'price': 2568.0,
        'repair_time': 7,
        'memo': '',
        'create_date': '2018-03-19T16:11:17.666292',
        'update_date': '2018-03-19T16:11:17.666292',
        'fk_admin': {
          'id': 2,
          'password': 'pbkdf2_sha256$100000$biLdUGdyq4IO$aGFxB90f4up8eJ7x2K4GMjiXi3Tpq6fGVX/ZcL5hT0w=',
          'last_login': null,
          'is_superuser': false,
          'username': 'user',
          'first_name': '',
          'last_name': '',
          'email': '',
          'is_staff': false,
          'is_active': true,
          'date_joined': '2018-03-16T10:49:00',
          'is_equ_admin': false,
          'gender': 'male',
          'mobile': null,
          'image': 'http://127.0.0.1:8000/media/image/default.png',
          'memo': '',
          'create_date': '2018-03-16T11:32:23.641102',
          'update_date': '2018-03-16T11:35:12.605725',
          'department': 1,
          'groups': [],
          'user_permissions': []
        },
        'fk_department': {
          'id': 4,
          'department_name': '城南分公司',
          'department_type': 2,
          'memo': '测试生成！',
          'create_date': '2018-03-16T14:21:26.650428',
          'update_date': '2018-03-16T14:21:26.650428'
        },
        'fk_idc': {
          'id': 3,
          'place_name': '总公司机房',
          'memo': null,
          'create_date': '2018-03-19T10:24:33.182758',
          'update_date': '2018-03-19T10:24:33.182758'
        },
        'fk_asset_type': {
          'id': 6,
          'asset_type_name': '交换机',
          'code': 'J',
          'memo': null,
          'create_date': '2018-03-19T10:30:54.662138',
          'update_date': '2018-03-19T10:30:54.662138'
        },
        'fk_asset_state': {
          'id': 6,
          'asset_state_name': '上交',
          'memo': '已经上交设备主管部门',
          'create_date': '2018-03-19T10:28:45.005024',
          'update_date': '2018-03-19T10:28:45.005024'
        },
        'fk_business_unit': {
          'id': 1,
          'name': '调度系统',
          'memo': '很重要的一个系统',
          'create_date': '2018-03-19T10:19:50.020496',
          'update_date': '2018-03-19T10:19:50.020496'
        },
        'fk_manufactory': {
          'id': 1,
          'manufactory': '联想',
          'support_num': '1234567',
          'address': '这里这里',
          'memo': '',
          'create_date': '2018-03-19T10:17:20.854577',
          'update_date': '2018-03-19T10:17:20.854577'
        },
        'fk_supplier': {
          'id': 4,
          'supplier': '电脑供应商2',
          'support_num': '132132156',
          'address': '地址23123123123',
          'memo': '',
          'create_date': '2018-03-19T10:19:33.476479',
          'update_date': '2018-03-19T10:19:33.476479'
        },
        'tags': [
          {
            'id': 1,
            'tag_name': '经常坏',
            'memo': null,
            'create_date': '2018-03-19T10:24:44.395496',
            'update_date': '2018-03-19T10:24:44.395496'
          }
        ]
      }
    ]
  }
}
