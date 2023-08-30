import { render, screen } from "@testing-library/react";
import RestCard, { WithFlatDealLabel } from "../RestCard";
import MOCKS_DATA from "../mocks/restCardMock.json";
import "@testing-library/jest-dom";

it("Should Load RestCard component with props data", () => {
  render(<RestCard restData={MOCKS_DATA} />);

  const name = screen.getByText("Andhra Gunpowder");

  expect(name).toBeInTheDocument();
});

it("Should Load RestCard with Label Flat Deal", () => {
  const RestaurantCardFlatDeal = WithFlatDealLabel(RestCard);

  render(<RestaurantCardFlatDeal restData={MOCKS_DATA} />);

  const FlatDeal = screen.getByText("Flat Deal");

  expect(FlatDeal).toBeInTheDocument();
});
