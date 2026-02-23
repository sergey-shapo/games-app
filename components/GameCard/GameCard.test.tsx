import { render, screen } from "@testing-library/react";
import GameCard from "./GameCard"; // adjust path if needed

// Mock next/image (very common & needed in Jest)
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
}));

jest.mock("next/link", () => {
  const MockLink = ({ children, href, ...props }: any) => (
    <a href={href} {...props}>
      {children}
    </a>
  );
  MockLink.displayName = "MockLink";
  return MockLink;
});

describe("GameCard", () => {
  const defaultProps = {
    title: "Super Mario Odyssey",
    image: "/images/mario.jpg",
    rating: 4.8,
    id: 123,
  };

  it("renders the game title correctly", () => {
    render(<GameCard {...defaultProps} />);
    expect(screen.getByText("Super Mario Odyssey")).toBeInTheDocument();
  });

  it("renders the rating with star symbol", () => {
    render(<GameCard {...defaultProps} />);
    expect(screen.getByText("⭐ 4.8")).toBeInTheDocument();
  });

  it("wraps everything in a link with correct href", () => {
    render(<GameCard {...defaultProps} />);

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/123");
  });

  it("passes alt text to the image", () => {
    render(<GameCard {...defaultProps} />);
    const image = screen.getByAltText("Super Mario Odyssey");
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", "/images/mario.jpg");
  });

  // Optional: one simple snapshot test (good for small components)
  it("matches snapshot", () => {
    const { container } = render(<GameCard {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
