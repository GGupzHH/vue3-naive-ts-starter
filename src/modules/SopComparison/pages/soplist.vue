<script lang="ts">
import { useSopComparison } from 'modules/SopComparison/store'
import { useTable } from '@/hooks/common/table'
import { NSpace, NButton, UploadCustomRequestOptions } from 'naive-ui'
import { useDictTagList } from '@/hooks/common/dictTag'
import IconFont from '@/components/IconFont/index.vue'
import CreateSopModal from 'modules/SopComparison/components/sop/create-sop-modal.vue'
import SOPSettingDrawer from 'modules/SopComparison/components/sop/sop-setting-drawer.vue'
import CreateSopCopyModal from 'modules/SopComparison/components/sop/sop-copy-modal.vue'

export default defineComponent({
  name: 'SopComparisonList'
})
</script>

<script setup lang="ts">
const proxy = getCurrentInstance()?.proxy
const useSopComparisonStore = useSopComparison()
const { columns, columnChecks, data, loading, getData, pagination, searchParams, resetSearchParams } = useTable({
  apiFn: useSopComparisonStore.getComparisonFormulaList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10,
    sopType: '0',
    prodStandard: '',
    prodModel: '',
    guidingTubeType: '',
    sopName: ''
  },
  columns: () => [
    {
      title: '序号',
      key: 'index',
      width: 60,
      align: 'center'
    },
    {
      title: '炉型',
      key: 'stoveType',
      width: 80,
      align: 'center'
    },
    {
      title: '热场',
      key: 'hotSpot',
      width: 80,
      align: 'center'
    },
    {
      title: '产品规格',
      key: 'prodStandard',
      width: 80,
      align: 'center'
    },
    {
      title: '型号',
      key: 'prodModel',
      width: 100,
      align: 'center'
    },
    {
      title: '满埚料量',
      key: 'batchCharge',
      width: 80,
      align: 'center'
    },
    {
      title: '掺杂剂',
      key: 'mixedEconomy',
      width: 80,
      align: 'center'
    },
    {
      title: '系统版本',
      key: 'version',
      width: 180,
      align: 'center'
    },
    {
      title: 'sop文件名',
      key: 'sopName',
      width: 100,
      align: 'center'
    },
    {
      title: '导流筒类型',
      key: 'guidingTubeType',
      width: 100,
      align: 'center'
    },
    {
      title: '时间',
      width: 180,
      key: 'createTime',
      align: 'center'
    },
    {
      title: '备注1',
      key: 'reservedInfo1',
      width: 80,
      align: 'center'
    },
    {
      title: '备注2',
      key: 'reservedInfo2',
      width: 80,
      align: 'center'
    },
    {
      title: '备注3',
      key: 'reservedInfo3',
      width: 80,
      align: 'center'
    },
    {
      title: '操作',
      key: 'active',
      width: 200,
      fixed: 'right',
      align: 'center',
      render(row: SopComparison.SOPContrast.ComparisonListItem) {
        return h(
          NSpace,
          {
            justify: 'center'
          },
          {
            default: () => [
              h(
                NButton,
                {
                  size: 'small',
                  type: 'warning',
                  ghost: true,
                  onClick: () => {
                    operateType.value = 'edit'
                    editingData.value = { ...row }
                    visibleModal.value = true
                  }
                },
                {
                  default: () => '编辑'
                }
              ),
              h(
                NButton,
                {
                  size: 'small',
                  type: 'primary',
                  ghost: true,
                  onClick: () => {
                    visibleDrawer.value = true
                    editingData.value = { ...row }
                  }
                },
                {
                  default: () => 'sop'
                }
              ),
              h(
                NButton,
                {
                  size: 'small',
                  type: 'primary',
                  ghost: true,
                  onClick: () => {
                    visibleCopyModal.value = true
                    editingData.value = { ...row }
                  }
                },
                {
                  default: () => '复制'
                }
              )
            ]
          }
        )
      }
    }
  ],
  immediate: undefined
})

console.log(pagination)

const checkedRowKeys = ref<string[]>([])
const visibleModal = ref(false)
const visibleCopyModal = ref(false)
const operateType = ref<SopComparison.SOPContrast.SOPOperateType>('add')
const editingData: Ref<SopComparison.SOPContrast.ComparisonListItem | undefined> = ref(undefined)

const visibleDrawer = ref(false)

const handleAdd = () => {
  operateType.value = 'add'
  visibleModal.value = true
}

const handleUploadCSVKey = async({
  file,
  data,
  headers,
  withCredentials,
  action,
  onFinish,
  onError,
  onProgress
}: UploadCustomRequestOptions) => {
  console.log(file)

  const formData = new FormData<{ file: File; }>()
  formData.append('file', file.file as File)
  const res = await useSopComparisonStore.uploadCSVKeyFiles(formData)
}

</script>

<template>
  <div class="flex-vertical-stretch gap-16px overflow-hidden <sm:overflow-auto">
    <NCard
      title="SOP列表查询"
      :bordered="false"
      size="small"
      class="card-wrapper"
    >
      <NForm
        :model="searchParams"
        label-placement="left"
        :label-width="80"
      >
        <NGrid
          responsive="screen"
          item-responsive
        >
          <NFormItemGi
            span="24 s:8 m:5"
            label="产品规格"
            path="prodStandard"
          >
            <NSelect
              v-model:value="searchParams.prodStandard"
              :options="useDictTagList('sop_standard_type')"
              placeholder="请选择产品规格"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 s:8 m:5"
            label="产品型号"
            path="prodModel"
          >
            <NSelect
              v-model:value="searchParams.prodModel"
              :options="useDictTagList('sop_mode_type')"
              placeholder="请选择产品型号"
            />
          </NFormItemGi>
          <NFormItemGi
            span="24 s:8 m:5"
            label="导流筒类型"
            path="guidingTubeType"
            :label-width="100"
          >
            <NSelect
              v-model:value="searchParams.guidingTubeType"
              :options="useDictTagList('sop_guiding_tube_type')"
              placeholder="请选择导流筒类型"
            />
          </NFormItemGi>

          <NFormItemGi
            span="24 s:8 m:5"
            label="sop名称"
            path="sopName"
          >
            <n-input
              v-model:value="searchParams.sopName"
              placeholder="输入sop名称"
            />
          </NFormItemGi>
          <NFormItemGi span="24 s:8 m:4">
            <NSpace
              class="w-full"
              justify="end"
            >
              <NButton
                type="primary"
                ghost
                @click="getData"
              >
                <template #icon>
                  <IconFont icon="icon-sousuo1" />
                </template>
                搜索
              </NButton>
              <NButton @click="resetSearchParams">
                <template #icon>
                  <IconFont icon="icon-shuaxin-01" />
                </template>
                清空
              </NButton>
            </NSpace>
          </NFormItemGi>
        </NGrid>
      </NForm>
    </NCard>
    <NCard
      title="SOP列表"
      :bordered="false"
      size="small"
      class="card-wrapper sm:flex-1-hidden"
    >
      <template #header-extra>
        <AdvancedTable
          v-model:columns="columnChecks"
          :is-delete-btn="false"
          :loading="loading"
          @add="handleAdd"
          @refresh="getData"
        >
          <template #prefix>
            <NUpload
              action=""
              :show-file-list="false"
              :custom-request="handleUploadCSVKey"
            >
              <NButton
                size="small"
                type="primary"
                ghost
              >
                CSV导入Key
              </NButton>
            </NUpload>
          </template>
        </AdvancedTable>
      </template>
      <NDataTable
        v-model:checked-row-keys="checkedRowKeys"
        :columns="columns"
        :data="data"
        size="small"
        :flex-height="true"
        :remote="true"
        :scroll-x="640"
        :loading="loading"
        :pagination="pagination"
        :row-key="(item) => item.id"
        class="sm:h-full"
      />
      <!-- 新建/修改SOP 文件 -->
      <CreateSopModal
        v-model:visible="visibleModal"
        :operate-type="operateType"
        :row-data="editingData"
        @submitted="getData"
      />
      <!-- 复制SOP文件 -->
      <CreateSopCopyModal
        v-model:visible="visibleCopyModal"
        :row-data="editingData"
        @submitted="getData"
      />
      <!-- SOP drawer -->
      <SOPSettingDrawer
        v-model:visible="visibleDrawer"
        :row-data="editingData"
        @submitted="getData"
      />
    </NCard>
  </div>
</template>
