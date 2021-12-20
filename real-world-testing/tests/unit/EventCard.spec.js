import { mount } from "@vue/test-utils";
import EventCard from "@/components/EventCard";

describe("EventCard", () => {
  it("renders the event's data successfully", () => {
    const event = {
      id: 1,
      time: "12:00AM",
      date: "December 31, 2021",
      title: "New Year Celebrations"
    };

    const wrapper = mount(EventCard, {
      props: {
        event
      }
    });

    const wrapperHtml = wrapper.html();
    expect(wrapperHtml).toContain(event.date);
    expect(wrapperHtml).toContain(event.time);
    expect(wrapperHtml).toContain(event.title);
  });
});
