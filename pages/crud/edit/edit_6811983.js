define("pages/crud/edit/edit",function(r,n,e){"use strict";var i=r("msg"),a=r("pages/crud/api");e.exports={template:'\r\n<div>\r\n    <!-- mainview -->\r\n    <mainview :title="pageTitle">\r\n        <breadcrumb slot="breadcrumb">\r\n            <breadcrumb-item link="/" class="am-icon-home">首页</breadcrumb-item>\r\n            <breadcrumb-item link="/crud">CRUD</breadcrumb-item>\r\n            <breadcrumb-item>{{pageTitle}}</breadcrumb-item>\r\n        </breadcrumb>\r\n\r\n        <!-- mainview-body -->\r\n        <template>\r\n\r\n            <am-panel title="全宽">\r\n                <!-- form container -->\r\n                <div class="am-g">\r\n                    <div class="am-u-md-10 am-u-md-offset-1">\r\n                        <!-- form -->\r\n                        <validator name="v0">\r\n                        <form class="am-form am-form-horizontal">\r\n                            <div class="am-form-group">\r\n                                <div class="am-u-md-2">\r\n                                    <label class="am-form-label">标题</label>\r\n                                </div>\r\n                                <div class="am-u-md-10">\r\n                                    <input v-model="model.title" type="text" placeholder="输入标题" v-validate:title="{required: true}">\r\n                                    <span class="form-group-msg" v-if="$v0.title.touched && $v0.title.invalid">请输入标题!</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class="am-form-group">\r\n                                <div class="am-u-md-2">\r\n                                    <label class="am-form-label">内容内容</label>\r\n                                </div>\r\n                                <div class="am-u-md-10">\r\n                                    <input v-model="model.content" type="text" placeholder="输入内容" v-validate:content="{required: true}">\r\n                                    <span class="form-group-msg" v-if="$v0.content.touched && $v0.content.invalid">请输入内容!</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class="am-form-group">\r\n                                <div class="am-u-md-10 am-u-md-offset-2">\r\n                                    <form-submit @submit="submit" :disabled="!$v0.valid"></form-submit>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                        </validator>\r\n                        <!--/ form -->\r\n                    </div>\r\n                </div><!--/ form container -->\r\n            </am-panel>\r\n\r\n            <!-- form container -->\r\n            <div class="am-g am-g-c">\r\n                <!-- cols -->\r\n                <div class="am-u-md-6">\r\n                    <am-panel title="半屏宽-垂直">\r\n                        <!-- form -->\r\n                        <validator name="v1">\r\n                        <form class="am-form">\r\n                            <div class="am-form-group">\r\n                                <label class="am-form-label">标题</label>\r\n                                <input v-model="model.title" type="text" placeholder="输入标题" v-validate:title="{required: true}">\r\n                                <span class="form-group-msg" v-if="$v1.title.touched && $v1.title.invalid">请输入标题!</span>\r\n                                \r\n                                valid : {{$v1.title.valid}} <br>\r\n                                touched : {{$v1.title.touched}} <br>\r\n                                undefined : {{$v1.title.undefined}} <br>\r\n                                dirty : {{$v1.title.dirty}} <br>\r\n                                pristine : {{$v1.title.pristine}} <br>\r\n                                modified : {{$v1.title.modified}} <br>\r\n                                \r\n                            </div>\r\n                            <div class="am-form-group">\r\n                                <label class="am-form-label">内容</label>\r\n                                <input v-model="model.content" type="text" placeholder="输入内容" v-validate:content="{required: true}">\r\n                                <span class="form-group-msg" v-if="$v1.content.touched && $v1.content.invalid">请输入内容!</span>\r\n                            </div>\r\n\r\n                            <div class="am-cf">\r\n                                <form-submit @submit="submit" :disabled="!$v1.valid"></form-submit>\r\n                            </div>\r\n\r\n                            valid : {{$v1.valid}} <br>\r\n                            touched : {{$v1.touched}} <br>\r\n                            undefined : {{$v1.undefined}} <br>\r\n                            dirty : {{$v1.dirty}} <br>\r\n                            pristine : {{$v1.pristine}} <br>\r\n                            modified : {{$v1.modified}} <br>\r\n                            \r\n                        </form>\r\n                        </validator>\r\n                        <!--/ form -->\r\n                    </am-panel>\r\n                </div><!-- cols -->\r\n                <!-- cols -->\r\n                <div class="am-u-md-6">\r\n                    <am-panel title="半屏宽-水平">\r\n                        <!-- form -->\r\n                        <validator name="v2">\r\n                        <form class="am-form am-form-horizontal">\r\n                            <div class="am-form-group">\r\n                                <div class="am-u-md-2">\r\n                                    <label class="am-form-label">标题</label>\r\n                                </div>\r\n                                <div class="am-u-md-10">\r\n                                    <input v-model="model.title" type="text" placeholder="输入标题" v-validate:title="{required: true}">\r\n                                    <span class="form-group-msg" v-if="$v2.title.touched && $v2.title.invalid">请输入标题!</span>\r\n                                </div>\r\n                            </div>\r\n                            <div class="am-form-group">\r\n                                <div class="am-u-md-2">\r\n                                    <label class="am-form-label">内容内容</label>\r\n                                </div>\r\n                                <div class="am-u-md-10">\r\n                                    <input v-model="model.content" type="text" placeholder="输入内容" v-validate:content="{required: true}">\r\n                                    <span class="form-group-msg" v-if="$v2.content.touched && $v2.content.invalid">请输入内容!</span>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class="am-form-group">\r\n                                <div class="am-u-md-12">\r\n                                    <form-submit @submit="submit" :disabled="!$v1.valid" class="am-fr"></form-submit>\r\n                                </div>\r\n                            </div>\r\n                        </form>\r\n                        </validator>\r\n                        <!--/ form -->\r\n                    </am-panel>\r\n                </div><!-- cols -->\r\n            </div>\r\n            <!--/ form wrapper -->\r\n        </template><!--/ mainview-body -->\r\n    </mainview><!--/ mainview -->\r\n</div>\r\n',mixins:[r("mixins/isNew")],data:function(){return{model:{id:null,title:null,content:null}}},computed:{pageTitle:function(){return this.isNew?"创建":"编辑"}},route:{data:function(r){if(this.isNew)r.next();else{var n=this.$route.params.id;a.get(n).then(function(n){r.next({model:n.data})})}}},methods:{_onSaveSuccess:function(){var r=this;i.alert("保存成功","success",function(){r.$route.router.go({name:"crud-list"})})},submit:function(){this.isNew?a.create({title:this.model.title}).then(this._onSaveSuccess):a.update({id:this.model.id,title:this.model.title}).then(this._onSaveSuccess)}}}});