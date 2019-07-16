import { connect } from "react-redux";
import Header from "./Header";

export const HeaderContainer = connect(
  state => ({
    messages: state.messages
  }),
  {}
)(Header);
