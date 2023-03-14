<template>
    <div v-if="countdownTime > 0">
        <!-- Còn: {{ countdown }} -->
        <Countdown :deadlineDate="new Date(time)" style="position: absolute;z-index: 2;top: -11rem;width: max-content;"
            countdownSize="1.5rem" :showLabels="false" />
    </div>
    <!-- <div v-else>
        Khuyến mãi đã kết thúc
    </div> -->
</template>
  
<script>
import moment from 'moment';
import 'moment/locale/vi';
import { Countdown } from 'vue3-flip-countdown'
import { format } from 'date-fns';
moment.locale('vi')

export default {
    components: {
        Countdown
    },
    data() {
        return {
            countdownTime: 0,
            intervalId: null,
        };
    },
    props: {
        time: String,
    },
    computed: {
        countdown() {
            return moment.duration(this.countdownTime, 'milliseconds').humanize();
        },
    },
    methods: {
        startCountdown() {
            this.intervalId = setInterval(() => {
                this.countdownTime = this.countdownTime - 1000;
                if (this.countdownTime <= 0) {
                    this.$emit('messageSent', 'The End');
                    clearInterval(this.intervalId);
                }
            }, 1000);
        },
    },
    mounted() {
        // tính toán thời gian còn lại của khuyến mãi
        // this.time = moment("2023-03-17 15:51:04", 'YYYY-MM-DD HH:mm:ss')
        // const dateTimeString = '2023-03-11T16:50';
        if (this.time !== null) {
            const formattedDateTimeString = format(new Date(this.time), 'yyyy-MM-dd HH:mm:ss');
            const endTime = moment(formattedDateTimeString, 'YYYY-MM-DD HH:mm:ss');
            const now = moment();
            this.countdownTime = endTime.diff(now);

            // bắt đầu đếm ngược
            this.startCountdown();
        }


    },
    beforeDestroy() {
        clearInterval(this.intervalId);
    },
};
</script>
  