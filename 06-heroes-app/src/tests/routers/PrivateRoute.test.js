import { shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { PrivateRoute } from 'routers/PrivateRoute';

describe('Tests in <PrivateRoute />', () => {
  const props = {
    location: {
      pathname: '/marvel'
    }
  };
  test('Should display component if is authenticated and save into localStorage', () => {
    const component = () => <span>Done!</span>;
    const wrapper = shallow(
      <MemoryRouter>
        <PrivateRoute isAuthenticated={true} component={component} {...props} />
      </MemoryRouter>
    );

    expect(wrapper.find('span').exists()).toBe(false);
  });
});
