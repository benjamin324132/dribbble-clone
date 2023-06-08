import { Shot } from "@/types/types";
import ShotCard from "./ShotCard";

const shots = [
  {
    _id: "1234",
    img: "https://cdn.dribbble.com/userupload/7581240/file/original-b4a248fcecf9fce8285011343b83ce2a.jpg?compress=1&resize=450x338&vertical=center",
    name: "FaithTrail - Logo Design",
    description: "Desc",
    userName: "Hugo",
    userAvatar:
      "https://cdn.dribbble.com/users/78433/avatars/small/305e1c98dca8c28213f093b08aed255b.png?1544179193",
    userId: "123",
    likeCount: 23,
    viewCount: 345,
  },
  {
    _id: "12343",
    img: "https://cdn.dribbble.com/userupload/7579142/file/original-dadca74877aacbd87c60018073774cf3.png?compress=1&resize=450x338&vertical=center",
    name: "Katalyst",
    description: "Desc",
    userName: "Dalius Stuoka",
    userAvatar:
      "https://cdn.dribbble.com/users/68544/avatars/small/4c145fcf55db7976aa63183a03c7aa65.png?1672415553",
    userId: "123",
    likeCount: 232,
    viewCount: 45,
  },
  {
    _id: "12344",
    img: "https://cdn.dribbble.com/userupload/7585421/file/original-f2661175eb7a3d9cb31c3d7d08333dd7.png?compress=1&resize=1200x933",
    name: "Candy Coated Characters",
    description: "Desc",
    userName: "Pretend Friends",
    userAvatar:
      "https://cdn.dribbble.com/users/301809/avatars/small/2f05d3118bf23a6a876b46e2eea3ed33.png?1673971894",
    userId: "123",
    likeCount: 23,
    viewCount: 345,
  },
  {
    _id: "12346",
    img: "https://cdn.dribbble.com/userupload/7578826/file/original-1cb83462bc5e172391a0860e2d5ecd44.png?compress=1&resize=1200x900",
    name: "Finance service - Mobile app",
    description: "Desc",
    userName: "Anastasia Golovko",
    userAvatar:
      "https://cdn.dribbble.com/users/4189231/avatars/small/7078fc7fecf46fb9af392d0d4cdc7252.png?1660299702",
    userId: "123",
    likeCount: 23,
    viewCount: 345,
  },
];

interface ContentProps {
  shots: Shot[];
}

const Content: React.FC<ContentProps> = ({
  shots
}) => {
  return (
    <div className="px-6 py-4 max-w-[1400px] mx-auto grid gap-9 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      {shots.map((shot) => (
        <ShotCard key={shot._id} shot={shot} />
      ))}
    </div>
  );
};

export default Content;
