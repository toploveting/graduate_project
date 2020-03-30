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

    <q-table
      :data="data"
      :columns="columns"
      row-key="name"
      :separator="separator"
      hide-bottom
      flat
      :pagination.sync="pagination"
    >
        <template>
          <q-tr no-hover>
             <q-td>
            </q-td>
          </q-tr>
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
          field: row => row.name,
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
          name: Monday,
          Morning: '',
          Noon: '',
          Night: ''
        },
        {
          name: Tuesday,
          Morning: '',
          Noon: '',
          Night: ''
        },
        {
          name: Wednesday,
          Morning: '',
          Noon: '',
          Night: ''
        },
        {
          name: Thursday,
          Morning: '',
          Noon: '',
          Night: ''
        },
        {
          name: Friday,
          Morning: '',
          Noon: '',
          Night: ''
        },
        {
          name: Saturday,
          Morning: '',
          Noon: '',
          Night: ''
        },
        {
          name: Sunday,
          Morning: '',
          Noon: '',
          Night: ''
        }
      ]
    }
  }
}

</script>
