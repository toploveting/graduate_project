<template>
  <div class="q-pa-md">
    <!-- <q-option-group
      v-model="separator"
      inline
      class="q-mb-md"
      :options="[
        { label: 'Horizontal (default)', value: 'horizontal' },
        { label: 'Vertical', value: 'vertical' },
        { label: 'Cell', value: 'cell' },
        { label: 'None', value: 'none' },
      ]"
    /> -->
  {{selected}}
    <q-table
      :data="data"
      :columns="columns"
      row-key="id"
      :separator="separator"
      hide-bottom
      flat
      :pagination.sync="pagination"
    >
      <template v-slot:body="props">
        <q-tr no-hover="" :props="props" class="cursor-pointer">
        <!-- <q-tr no-hover v-for="(desc, key) in data" :key="key">
          <q-td>{{desc.Morning}}</q-td>
          <q-td>{{desc.Noon}}</q-td>
          <q-td>{{desc.Noon}}</q-td> -->
            <q-td :props="props" v-for="col in props.cols" :key="col.name" @click.native="selectRow(props.row.id,col.name)" :class="selected.hasOwnProperty(props.row.id) && selected[props.row.id].indexOf(col.name) != -1? 'bg-grey-3':''">
              {{ props.row[col.field] }}
              <!-- <img src="https://cdn.auth0.com/blog/vuejs/vue-logo.png" alt="" width="50" height="50"> -->
            </q-td>
            <!-- <q-td v-slot:body-cell>
              <img src="https://cdn.auth0.com/blog/vuejs/vue-logo.png" alt="" width="50" height="50">
            </q-td> -->
        </q-tr>
      </template>

      <template v-slot:body-cell-Night="cell">
        {{cell.Night}}
      </template>
    </q-table>

  </div>
</template>

<script>
import { date } from 'quasar'

let newDate = new Date()
const timeStamp = Date.now()
const Month = date.formatDate(timeStamp, 'M')
// const Today = newDate
const day = date.getDayOfWeek(newDate)

newDate = date.subtractFromDate(newDate, { days: day })

newDate = date.addToDate(newDate, { days: 1 })
const Monday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
const Tuesday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
const Wednesday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
const Thursday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
const Friday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
const Saturday = date.formatDate(newDate, 'D')

newDate = date.addToDate(newDate, { days: 1 })
const Sunday = date.formatDate(newDate, 'D')

export default {
  data () {
    return {
      selected: {},
      separator: 'cell',
      pagination: {
        descending: true,
        page: 1,
        rowsPerPage: 7
        // rowsNumber: xx if getting data from a server
      },
      columns: [
        {
          name: 'desc',
          required: true,
          label: Month + '月',
          align: 'center',
          field: 'name',
          format: val => `${val}`
        },
        { name: 'Morning', align: 'center', label: 'Morning', field: 'Morning' },
        { name: 'Noon', align: 'center', label: 'Noon', field: 'Noon' },
        { name: 'Night', align: 'center', label: 'Night', field: 'Night' }
        // { name: 'protein', label: 'Protein (g)', field: 'protein' },
        // { name: 'sodium', label: 'Sodium (mg)', field: 'sodium' },
        // { name: 'calcium', label: 'Calcium (%)', field: 'calcium', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) },
        // { name: 'iron', label: 'Iron (%)', field: 'iron', sortable: true, sort: (a, b) => parseInt(a, 10) - parseInt(b, 10) }
      ],
      data: [
        {
          id: 0,
          name: Monday,
          Motning: '',
          Noon: ''
          // Night: ''
        },
        {
          id: 1,
          name: Tuesday
          // Morning: '',
          // Noon: '',
          // Night: ''
        },
        {
          id: 2,
          name: Wednesday
          // Morning: '',
          // Noon: '',
          // Night: ''
        },
        {
          id: 3,
          name: Thursday
          // Morning: '',
          // Noon: '',
          // Night: ''
        },
        {
          id: 4,
          name: Friday
          // Morning: '',
          // Noon: '',
          // Night: ''
        },
        {
          id: 5,
          name: Saturday
          // Morning: '',
          // Noon: '',
          // Night: ''
        },
        {
          id: 6,
          name: Sunday
          // Morning: '',
          // Noon: '',
          // Night: ''
        }
      ]
    }
  },
  methods: {
    selectRow (index, value) {
      if (Object.prototype.hasOwnProperty.call(this.selected, index)) {
        this.selected[index].indexOf(value) === -1 ? this.selected[index].push(value) : this.selected[index].splice(this.selected[index].indexOf(value), 1)
      } else {
        this.selected[index] = []
        this.selected[index].push(value)
        this.selected = Object.assign({}, this.selected)
      }
    },
    getColor (val) {
      if (val === 'cold') return 'green'
      if (val === 'room') return 'yellow'
      if (val === 'warm') return 'red'
    }
  }
}

</script>

<style>
.choosed {
  background-color: #000;
}
</style>
