<template>
  <div class="seoinfo-mian">
    <div class="seoinfo-full">
      <div class="row">
        <div class="col-left">

          <div class="newseo-head">
            <svg class="icon of-gr" aria-hidden="true"><use href="#icon-title"></use></svg>
              <span>新建案件</span>
          </div>
          <div class="newseo-commit">
            <div class="icon_operate_save">保存</div>
            <div class="icon_operate_case-se">在线办结</div>
            <div class="icon_operate_send-de">发送部门</div>
            <div class="icon_operate_obsolet">无效案件</div>
          </div>
          <div class="newseo-line"></div>
          <div class="newseo-from">
            <el-form :inline="true" ref="form" :model="form" label-width="80px">
            <div>
                <el-form-item label="姓名">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
                  <el-form-item label="联系电话">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
            </div>
                
             <div>
                <el-form-item label="案件级别">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                      <el-option label="区域一" value="shanghai"></el-option>
                      <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="案情来源">
                      <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
             </div>
             <div>
                <el-form-item label="网上公开">
                    <el-radio-group v-model="form.resource">
                      <el-radio label="是"></el-radio>
                      <el-radio label="否"></el-radio>
                    </el-radio-group>
                  </el-form-item>
                  <el-form-item label="信息保密">
                      <el-radio-group v-model="form.resource">
                        <el-radio label="是"></el-radio>
                        <el-radio label="否"></el-radio>
                      </el-radio-group>
                    </el-form-item>
             </div>
             <div>
                <el-form-item label="事件描述">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item>
             </div>
             <div>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                  </el-form-item>
             </div>
             <div>
                <el-form-item label="详细地址">
                    <el-input v-model="form.name"></el-input>
                    <el-button>定位</el-button>
                  </el-form-item>
             </div>
             <div>
                <el-form-item label="关键字">
                    <el-input v-model="form.name"></el-input>
                  </el-form-item>
             </div>
             <div>
                <el-form-item label="事件类型">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="办理方案">
                      <el-select v-model="form.region" placeholder="请选择活动区域">
                          <el-option label="区域一" value="shanghai"></el-option>
                          <el-option label="区域二" value="beijing"></el-option>
                        </el-select>
                    </el-form-item>
             </div>
             <div>
                <el-form-item label="办理部门">
                    <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                  </el-form-item>
                  <el-form-item label="抄送部门">
                      <el-select v-model="form.region" placeholder="请选择活动区域">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                      </el-select>
                    </el-form-item>
             </div>
             <div>
                <el-upload
                class="upload-demo"
                action="https://jsonplaceholder.typicode.com/posts/"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :before-remove="beforeRemove"
                multiple
                :limit="3"
                :on-exceed="handleExceed"
                :file-list="fileList">
                <el-button size="small" type="primary">点击上传</el-button>
                <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
              </el-upload>
             </div>
            </el-form>
          </div>
        </div>
        <div class="col-right">
        </div>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        name: '综合查询',
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit: function() {
        console.log('submit!')
      }
    }

  }
</script>
<style lang="scss" scoped="" type="text/css">
  .icon_operate_save {background:#fff url("../../assets/images/icon/icon_operate_save.png") no-repeat 15px center;}
  .icon_operate_save:hover {background:#4181ff url("../../assets/images/icon/icon_operate_save-active.png") no-repeat 15px center;color:#fff;}
  .icon_operate_case-se {background:#fff url("../../assets/images/icon/icon_operate_case-se.png") no-repeat 15px center;}
  .icon_operate_case-se:hover {background:#4181ff url("../../assets/images/icon/icon_operate_case-se-active.png") no-repeat 15px center;color:#fff;}
  .icon_operate_send-de {background:#fff url("../../assets/images/icon/icon_operate_send-de.png") no-repeat 15px center;}
  .icon_operate_send-de:hover {background:#4181ff url("../../assets/images/icon/icon_operate_send-de-active.png") no-repeat 15px center;color:#fff;}
  .icon_operate_obsolet {background:#fff url("../../assets/images/icon/icon_operate_obsolet.png") no-repeat 15px center;}
  .icon_operate_obsolet:hover {background:#4181ff url("../../assets/images/icon/icon_operate_obsolet-active.png") no-repeat 15px center;color:#fff;}
</style>
<style scoped>
  .seoinfo-mian {
    position: relative;
    background: #edf0f5;
    height: calc(100% - 45px);
    overflow: auto;
  }

  .seoinfo-full {
    height: 100%;
    padding: 20px;
  }

  .row {
    display: flex;
  }

  .col-left {
    display: flex;
    width: 60%;
    background-color: #fff;
    border-radius: 3px;
    margin-right: 20px;
    box-shadow: 2px 2px 3px 0 rgba(99, 99, 99, 0.15), -2px -2px 3px 0 rgba(99, 99, 99, 0.15);
    flex-direction: column;
    padding: 20px;
  }
  .newseo-head{
    font-size: 16px;
    color: #4181ff;
    font-weight: bold;
  }
  .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
      }
  .newseo-commit {
    display: flex;
  }

  .newseo-line {
    border-bottom: 2px solid;
  }

  .col-right {
    display: flex;
    width: 40%;
    background-color: #fff;
    border-radius: 3px;
    box-shadow: 2px 2px 3px 0 rgba(99, 99, 99, 0.15), -2px -2px 3px 0 rgba(99, 99, 99, 0.15);
  }
</style>