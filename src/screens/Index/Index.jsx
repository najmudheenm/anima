import React from "react";
import { CheckboxLabel } from "../../components/CheckboxLabel";
import { PrimaryBranded } from "../../components/PrimaryBranded";
import { PrimaryReversed } from "../../components/PrimaryReversed";
import { Sort } from "../../components/Sort";
import "./style.css";

export const Index = () => {
  return (
    <div className="index">
      <div className="div-2">
        <CheckboxLabel
          checkboxLabel="base-checked"
          className="checkbox-label-instance"
          divClassName="design-component-instance-node"
          text={
            <>
              Direct
              <br />
              from $189
            </>
          }
        />
        <CheckboxLabel
          checkboxLabel="base-checked"
          className="checkbox-label-2"
          divClassName="design-component-instance-node"
          text={
            <>
              1 Stop
              <br />
              from $184
            </>
          }
        />
        <CheckboxLabel
          checkboxLabel="base-checked"
          className="checkbox-label-3"
          divClassName="design-component-instance-node"
          text={
            <>
              2+ Stop
              <br />
              from $742
            </>
          }
        />
        <div className="overlap">
          <img
            className="line"
            alt="Line"
            src="https://cdn.animaapp.com/projects/64fe1a93b6e2a0e2da10ec7a/releases/64fe1adc005c8f21dceb722b/img/line-3.svg"
          />
          <img
            className="line-2"
            alt="Line"
            src="https://cdn.animaapp.com/projects/64fe1a93b6e2a0e2da10ec7a/releases/64fe1adc005c8f21dceb722b/img/line-5.svg"
          />
          <img
            className="line-3"
            alt="Line"
            src="https://cdn.animaapp.com/projects/64fe1a93b6e2a0e2da10ec7a/releases/64fe1adc005c8f21dceb722b/img/line-3.svg"
          />
          <div className="text-wrapper-2">$219</div>
          <div className="text-wrapper-3">19:15</div>
          <div className="text-wrapper-4">LTN</div>
          <div className="text-wrapper-5">EDI</div>
          <div className="text-wrapper-6">21:00</div>
          <div className="text-wrapper-7">20:30</div>
          <div className="text-wrapper-8">EDI</div>
          <div className="text-wrapper-9">1h 15</div>
          <div className="text-wrapper-10">Direct</div>
          <div className="text-wrapper-11">1h 15</div>
          <div className="text-wrapper-12">Direct</div>
          <div className="text-wrapper-13">LTN</div>
          <div className="text-wrapper-14">22:15</div>
          <div className="text-wrapper-15">3 deal from</div>
          <PrimaryBranded className="primary-branded-instance" property1="branded-base" text="Select" />
        </div>
        <img
          className="line-4"
          alt="Line"
          src="https://cdn.animaapp.com/projects/64fe1a93b6e2a0e2da10ec7a/releases/64fe1adc005c8f21dceb722b/img/line-1.svg"
        />
        <img
          className="line-5"
          alt="Line"
          src="https://cdn.animaapp.com/projects/64fe1a93b6e2a0e2da10ec7a/releases/64fe1adc005c8f21dceb722b/img/line-1.svg"
        />
        <div className="text-wrapper-16">Stops</div>
        <div className="text-wrapper-17">Departure times</div>
        <div className="text-wrapper-18">$219</div>
        <div className="overlap-group">
          <div className="text-wrapper-19">Outbound</div>
          <div className="text-wrapper-20">00:00 - 23:59</div>
        </div>
        <div className="overlap-2">
          <div className="text-wrapper-19">Return</div>
          <div className="text-wrapper-20">00:00 - 23:59</div>
        </div>
        <div className="overlap-3">
          <div className="text-wrapper-21">Journey duration</div>
          <p className="text-wrapper-20">1.5 hours - 26.0 hours</p>
        </div>
        <Sort
          className="sort-instance"
          sort="https://cdn.animaapp.com/projects/64fe1a93b6e2a0e2da10ec7a/releases/64fe1adc005c8f21dceb722b/img/sort.svg"
        />
        <Sort
          className="sort-2"
          sort="https://cdn.animaapp.com/projects/64fe1a93b6e2a0e2da10ec7a/releases/64fe1adc005c8f21dceb722b/img/sort.svg"
        />
        <Sort
          className="sort-3"
          sort="https://cdn.animaapp.com/projects/64fe1a93b6e2a0e2da10ec7a/releases/64fe1adc005c8f21dceb722b/img/sort.svg"
        />
        <div className="overlap-4">
          <header className="header">
            <div className="logo">
              <div className="logo-wrapper">
                <img
                  className="logo-2"
                  alt="Logo"
                  src="https://cdn.animaapp.com/projects/64fe1a93b6e2a0e2da10ec7a/releases/64fe1adc005c8f21dceb722b/img/logo.svg"
                />
              </div>
            </div>
          </header>
          <PrimaryReversed className="primary-reversed-instance" property1="branded-base" text="Log In" />
        </div>
        <PrimaryBranded className="primary-branded-2" property1="branded-base" text="Select" />
      </div>
    </div>
  );
};
