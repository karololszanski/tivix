import InitialModule from "components/modules/initialModule/initialModule";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import { store } from "store/store";

describe("initialModule", () => {
  it("renders without crashing", () => {
    shallow(
      <Provider store={store}>
        <InitialModule />
      </Provider>
    );
  });

  it("renders title", () => {
    const wrapper = shallow(
      <Provider store={store}>
        <InitialModule />
      </Provider>
    );
    expect(wrapper.find('[data-testid="initial-title"]').exists());
  });
});
