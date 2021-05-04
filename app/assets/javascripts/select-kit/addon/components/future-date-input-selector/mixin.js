import { CLOSE_STATUS_TYPE } from "discourse/controllers/edit-topic-timer";
import Mixin from "@ember/object/mixin";
import { timeframeDetails } from "select-kit/components/future-date-input-selector";

// fixme remove _updateAt and the whole mixin
export default Mixin.create({
  _updateAt(selection) {
    const details = timeframeDetails(selection);

    if (details) {
      return {
        time: details.when(
          moment(),
          this.statusType !== CLOSE_STATUS_TYPE ? 8 : 18
        ),
        icon: details.icon,
      };
    }

    return { time: moment() };
  },
});
