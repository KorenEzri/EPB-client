import * as React from 'react';
import * as styles from './Styles';
import { useHistory } from 'react-router-dom';

interface Props {
  action: { name: string; description: string; dependencies: string[]; link:string;available: boolean };
}
export function AddAction(props: Props) {
  const history = useHistory();
  const { action } = props;
  const [hide, setHidden] = React.useState(true);
  return (
    <styles.Wrapper hide={hide}  className={action.available ? "" : "grey_out"}>
      <styles.ActionDiv
        onClick={() => {
          setHidden(!hide);
        }}
        hide={hide}
        className={action.available ? "" : "grey_out"}
      >
        {action.name}
      </styles.ActionDiv>
      <styles.ActionWrapperHidden hide={hide} className={action.available ? "" : "grey_out"}>
        <styles.DescriptionSubTitle>Description: </styles.DescriptionSubTitle>
        <styles.Description>{action.description}</styles.Description>
        <styles.Dependencies>
          <styles.DependencySubTitle>Dependencies:</styles.DependencySubTitle>
          {action.dependencies.map((dependency: string, index: number) => {
            return (
              <styles.Dependency key={`${dependency}${index}`}>
                {dependency}
              </styles.Dependency>
            );
          })}
        </styles.Dependencies>
        <styles.GetItButton
          onClick={() => {
            history.push(`/${action.link}`);
          }}
        >
          Get it now
        </styles.GetItButton>
      </styles.ActionWrapperHidden>
    </styles.Wrapper>
  );
}
