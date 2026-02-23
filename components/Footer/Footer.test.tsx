import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the footer landmark element", () => {
    render(<Footer />);
    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  });

  it('displays the "Made with ❤️ by Sergey Shaposhnik" credit text', () => {
    render(<Footer />);
    expect(
      screen.getByText(/Made with ❤️ by Sergey Shaposhnik/i),
    ).toBeInTheDocument();
  });

  it("contains a link to Sergey Shaposhnik’s LinkedIn profile", () => {
    render(<Footer />);

    const link = screen.getByRole("link", { name: /linkedin/i });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/sergey-shaposhnik/",
    );
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("has both the credit text and the LinkedIn link inside the same paragraph", () => {
    render(<Footer />);

    const paragraph = screen.getByRole("paragraph");

    expect(paragraph).toHaveTextContent("Made with ❤️ by Sergey Shaposhnik");
    expect(paragraph).toHaveTextContent("LinkedIn");
    expect(paragraph).toContainElement(
      screen.getByRole("link", { name: /linkedin/i }),
    );
  });

  it("applies the correct CSS module class to the footer", () => {
    const { container } = render(<Footer />);
    expect(container.firstChild).toHaveClass("footer");
  });
});
