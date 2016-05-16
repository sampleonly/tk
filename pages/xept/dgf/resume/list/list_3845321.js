define("pages/xept/dgf/resume/list/list",function(t,e,r){"use strict";var n=t("msg"),a=t("pages/xept/dgf/resume/api");r.exports={template:'<div>\r\n    <!-- mainview -->\r\n    <mainview title="简历">\r\n        <breadcrumb slot="breadcrumb">\r\n            <breadcrumb-item link="/" class="am-icon-home">首页</breadcrumb-item>\r\n            <breadcrumb-item>小二跑腿</breadcrumb-item>\r\n            <breadcrumb-item>短工坊</breadcrumb-item>\r\n            <breadcrumb-item>简历</breadcrumb-item>\r\n        </breadcrumb>\r\n\r\n        <!-- mainview-body -->\r\n        <template>\r\n            <!-- data list -->\r\n            <table class="am-table am-table-hover am-table-well am-text-nowrap">\r\n                <thead>\r\n                    <tr>\r\n                        <th width="70px">#</th>\r\n                        <th>求职意向</th>\r\n                        <th>昵称</th>\r\n                        <th>性别</th>\r\n                        <th>年龄</th>\r\n                        <th>状态</th>\r\n                        <th>发布时间</th>\r\n                        <th>发布者</th>\r\n                        <th>状态</th>\r\n\r\n                        <th width="220px">操作</th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody>\r\n                    <tr v-for="item in collection">\r\n                        <td>{{item.id}}</td>\r\n                        <td>{{item.title}}</td>\r\n                        <td>{{item.userName}}</td>\r\n                        <td>{{item.gender | dict \'gender\'}}</td>\r\n                        <td>{{item.age}}</td>\r\n                        <td>{{item.state | dict \'xept.state\'}}</td>\r\n                        <td>{{item.time}}</td>\r\n                        <td>{{item.user}}</td>\r\n                        <td>{{item.state | dict \'xept.state\'}}</td>\r\n                        <td>\r\n                            <div class="am-btn-group am-btn-group-xs">\r\n                                <a v-link="{name: \'xept-dgf-resume-edit\', params: {id: item.id}}" class="am-btn am-btn-default">\r\n                                    <span class="am-text-primary"><i class="am-icon-pencil"></i> 编辑</span>\r\n                                </a>\r\n                                <a @click.prevent="remove(item.id)" class="am-btn am-btn-default">\r\n                                    <span class="am-text-danger"><i class="am-icon-trash"></i> 删除</span>\r\n                                </a>\r\n                            </div>\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n\r\n            <pager :page="$route.query.page" :total="total" :route="$route"></pager>\r\n            <!--/ data list -->\r\n        </template><!--/ mainview-body -->\r\n    </mainview><!--/ mainview -->\r\n</div>\r\n',data:function(){return{collection:[],total:0}},route:{data:function(t){this.fetch().then(function(){t.next()})}},methods:{fetch:function(){var t=this;return a.fetch({page:this.$route.query.page}).then(function(e){t.collection=e.data,t.total=e.totalCount})},remove:function(t){var e=this;n.confirm("确定删除?",function(){a.remove(t).then(function(){n.alert("删除成功.","success"),e.fetch()})})}}}});