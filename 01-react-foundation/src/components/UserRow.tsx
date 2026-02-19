import type { Result } from "../interfaces";

interface Props {
  user: Result;
}

export const UserRow = ({user}: Props) => {

  const {image, name, species} = user;

  return (
    <tr>
      <td>
        <img style={{width: '100px'}} src={image} alt="user image" />
      </td>
      <td>{name}</td>
      <td>{species}</td>
    </tr>
  )
}
