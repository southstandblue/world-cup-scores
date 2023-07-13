import { render, screen, fireEvent } from "@testing-library/react";
import NewMatchForm from "./NewMatchForm";

// Dummy function to handle the Start Match click method
const dummyFunction = () => {
  return [];
};

describe("Test the New Match Form", () => {
  test("NewMatchForm renders the Home Team Input Field in the document", () => {
    render(<NewMatchForm />);
    const homeTeamInput = screen.getByPlaceholderText("Home Team");
    expect(homeTeamInput).toBeInTheDocument();
  });
  test("NewMatchForm renders the Home Team Input Default Value (blank) in the document", () => {
    render(<NewMatchForm />);
    const homeTeamInput = screen.getByPlaceholderText("Home Team");
    expect(homeTeamInput).toHaveValue("");
  });
  test("NewMatchForm renders the Home Team Input Entered Value in the document", () => {
    render(<NewMatchForm />);
    const homeTeamInput = screen.getByPlaceholderText("Home Team");
    fireEvent.change(homeTeamInput, { target: { value: "England" } });
    expect(homeTeamInput.value).toBe("England");
  });
  test("NewMatchForm renders the Away Team Input field in the document", () => {
    render(<NewMatchForm />);
    const awayTeamInput = screen.getByPlaceholderText("Away Team");
    expect(awayTeamInput).toBeInTheDocument();
  });
  test("NewMatchForm renders the Away Team Input Default Value (blank) in the document", () => {
    render(<NewMatchForm />);
    const awayTeamInput = screen.getByPlaceholderText("Away Team");
    expect(awayTeamInput).toHaveValue("");
  });
  test("NewMatchForm renders the Away Team Input Entered Value in the document", () => {
    render(<NewMatchForm />);
    const awayTeamInput = screen.getByPlaceholderText("Away Team");
    fireEvent.change(awayTeamInput, { target: { value: "France" } });
    expect(awayTeamInput.value).toBe("France");
  });
  test("NewMatchForm renders the Start Match button in the document", () => {
    render(<NewMatchForm />);
    const newGameButton = screen.getByTestId("startMatchButton");
    expect(newGameButton).toBeInTheDocument();
  });
  test("NewMatchForm renders the Start Match button initally as Disabled in the document", () => {
    render(<NewMatchForm />);
    const newGameButton = screen.getByTestId("startMatchButton");
    expect(newGameButton).toBeDisabled();
  });
  test("NewMatchForm renders the Start Match button as Disabled if the Home Team is entered but not the Away Team in the document", () => {
    render(<NewMatchForm />);

    const homeTeamInput = screen.getByPlaceholderText("Home Team");
    fireEvent.change(homeTeamInput, { target: { value: "England" } });

    const newGameButton = screen.getByTestId("startMatchButton");
    expect(newGameButton).toBeDisabled();
  });
  test("NewMatchForm renders the Start Match button as Disabled if the Away Team is entered but not the Home Team in the document", () => {
    render(<NewMatchForm />);

    const awayTeamInput = screen.getByPlaceholderText("Away Team");
    fireEvent.change(awayTeamInput, { target: { value: "France" } });

    const newGameButton = screen.getByTestId("startMatchButton");
    expect(newGameButton).toBeDisabled();
  });
  test("NewMatchForm renders the Start Match button as Enabled if both the Home Team and Away Team are entered in the document", () => {
    render(<NewMatchForm />);

    const homeTeamInput = screen.getByPlaceholderText("Home Team");
    fireEvent.change(homeTeamInput, { target: { value: "England" } });

    const awayTeamInput = screen.getByPlaceholderText("Away Team");
    fireEvent.change(awayTeamInput, { target: { value: "France" } });

    const newGameButton = screen.getByTestId("startMatchButton");
    expect(newGameButton).toBeEnabled();
  });
  test("NewMatchForm renders the default Home/Away Team field values (blank) in the document when the Start Match button is clicked", () => {
    render(<NewMatchForm persistMatch={dummyFunction} />);

    const homeTeamInput = screen.getByPlaceholderText("Home Team");
    fireEvent.change(homeTeamInput, { target: { value: "England" } });

    const awayTeamInput = screen.getByPlaceholderText("Away Team");
    fireEvent.change(awayTeamInput, { target: { value: "France" } });

    const newGameButton = screen.getByTestId("startMatchButton");
    fireEvent.click(newGameButton);

    expect(homeTeamInput).toHaveValue("");
    expect(awayTeamInput).toHaveValue("");
  });
});
