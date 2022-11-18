import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import propTypes from "prop-types";

export const FoodExpiring = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="foodexptitle">
        <h3>
          <p>
            Organize all your food at home, by their categories from the{" "}
            <strong>Food Pyramid!</strong>
          </p>
          <p>
            What does <strong>Food Pyramid</strong> means?
          </p>
          <p>Click here to learn more!</p>
        </h3>
      </div>

      {/* <div className="accordion">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <p>- Earliest expiration in the next week</p>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">Here we'll have a list</div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <p>- Products expiring in the next month</p>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">Here we'll have another list</div>
          </div>
        </div>
      </div> */}
      <div className="expiration2">
        <h1>
          <strong>Daily Food Pyramid</strong>
        </h1>
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <li className="list-group-item">
                <h2>Healthy Fat</h2>
                <img src="https://palm.southbeachdiet.com/wp-content/uploads/2018/12/hero-3-800x585.jpg" />
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <i class="fas fa-utensils"></i> Learn More
                </button>
                <button type="button" className="btn">
                  <i class="fas fa-plus"></i>Add item to list
                </button>

                <div className="modal fade" id="staticBackdrop">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <h2>What is Healthy Fat?</h2>A small amount of fat is an
                        essential part of a healthy, balanced diet. Fat is a
                        source of essential fatty acids, which the body cannot
                        make itself. Fat helps the body absorb vitamin A,
                        vitamin D and vitamin E. These vitamins are fat-soluble,
                        which means they can only be absorbed with the help of
                        fats. Examples of fats are butter, cheese, oils, nuts,
                        seeds and chocolates.
                        <div>
                          <button
                            type="button"
                            className="btn"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>

            <div className="col">
              <li className="list-group-item">
                <h2>Protein</h2>
                <img src="https://i.insider.com/62855ef90fdb180018cc0e15?width=700" />
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <i class="fas fa-utensils"></i> Learn More
                </button>
                <button type="button" className="btn">
                  <i class="fas fa-plus"></i>Add item to list
                </button>

                <div className="modal fade" id="staticBackdrop">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <h2>What is Protein?</h2>Protein is found throughout the
                        body—in muscle, bone, skin, hair, and virtually every
                        other body part or tissue. It makes up the enzymes that
                        power many chemical reactions and the hemoglobin that
                        carries oxygen in your blood. At least 10,000 different
                        proteins make you what you are and keep you that way.
                        Protein is made from twenty-plus basic building blocks
                        called amino acids. Because we don’t store amino acids,
                        our bodies make them in two different ways: either from
                        scratch, or by modifying others. Nine amino
                        acids—histidine, isoleucine, leucine, lysine,
                        methionine, phenylalanine, threonine, tryptophan, and
                        valine—known as the essential amino acids, must come
                        from food. Examples of protein are meats, poultry,
                        protein powders, fish, eggs, shrimp, crab and lobsters,
                        etc.
                        <div>
                          <button
                            type="button"
                            className="btn"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn">
                            <i class="fas fa-plus"></i>Add item to list
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>

            <div className="col">
              <li className="list-group-item">
                <h2>Dairy</h2>
                <img src="https://news.sanfordhealth.org/wp-content/uploads/2020/06/Dairy-products.jpg" />
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <i class="fas fa-utensils"></i> Learn More
                </button>
                <button type="button" className="btn">
                  <i class="fas fa-plus"></i>Add item to list
                </button>

                <div className="modal fade" id="staticBackdrop">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <h2>What is Dairy?</h2>The nutrients and types of fat in
                        dairy are involved with bone health, cardiovascular
                        disease, and other conditions. Calcium, vitamin D, and
                        phosphorus are important for bone building, and the high
                        potassium content of dairy foods can help lower blood
                        pressure. Examples of dairy are milk, yogurt, cheese,
                        Greek yogurt, and cottage cheese.
                        <div>
                          <button
                            type="button"
                            className="btn"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn">
                            <i class="fas fa-plus"></i> Add item to list
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>

        <div className="container text-center">
          <div className="row">
            <div className="col">
              <li className="list-group-item">
                <h2>Grains/Carbohydrates</h2>
                <img src="https://www.whitneyerd.com/wp-content/uploads/2020/04/whole-grains.jpg" />
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <i class="fas fa-utensils"></i> Learn More
                </button>
                <button type="button" className="btn">
                  <i class="fas fa-plus"></i> Add item to list
                </button>

                <div className="modal fade" id="staticBackdrop">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <h2>What are Grains/Carbohydrates?</h2>Carbohydrates, or
                        carbs, are sugar molecules. Along with proteins and
                        fats, carbohydrates are one of three main nutrients
                        found in foods and drinks. Your body breaks down
                        carbohydrates into glucose. Glucose, or blood sugar, is
                        the main source of energy for your body's cells,
                        tissues, and organs. Carbohydrates include sugars,
                        starches, and fiber. Examples of carbohydrates are
                        bread, pasta, rice, fruits, cereal, beans, potato, sweet
                        potato, and some vegetables.
                        <div>
                          <button
                            type="button"
                            className="btn"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn">
                            <i class="fas fa-plus"></i> Add item to list
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <div className="col">
              <li className="list-group-item">
                <h2>Vegetables</h2>
                <img src="https://imgk.timesnownews.com/story/vegetables_1.jpg?tr=w-1200,h-900" />
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <i class="fas fa-utensils"></i> Learn More
                </button>
                <button type="button" className="btn">
                  <i class="fas fa-plus"></i> Add item to list
                </button>

                <div className="modal fade" id="staticBackdrop">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <h2>What are Vegetables?</h2>Eating vegetables
                        represents important part of your daily diet that
                        provides our bodies with important nutrients. Vegetables
                        can regulate our metabolism, protect skin, help our
                        bones, bloodstream, heart, guts, reduce risk of cancer,
                        preserve our eyesight and much more. Examples of
                        vegetables are spinach, carrots, broccoli, cauliflower,
                        asparagus, green beans, kale, onions, peppers, and etc.
                        <div>
                          <button
                            type="button"
                            className="btn"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn">
                            <i class="fas fa-plus"></i> Add item to list
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>

            <div className="col">
              <li className="list-group-item">
                <h2>Fruits</h2>
                <img src="https://www.canr.msu.edu/contentAsset/image/4b2b7b46-dfcc-43f6-b7ce-3297d288c1df/fileAsset/filter/Resize,Jpeg/resize_w/750/jpeg_q/80" />
                <button
                  type="button"
                  className="btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <i class="fas fa-utensils"></i> Learn More
                </button>
                <button type="button" className="btn">
                  <i class="fas fa-plus"></i> Add item to list
                </button>

                <div className="modal fade" id="staticBackdrop">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-body">
                        <h2>What are Fruits?</h2>The consumption of fruit is not
                        only essential for the health and maintenance of body
                        but they actually make your skin look radiant, young and
                        glowing as fruits are full of anti-oxidants. Examples of
                        fruit are strawberries, watermelon, pineapples, all
                        types of berries, oranges, grapes, apples, kiwi, and
                        etc.
                        <div>
                          <button
                            type="button"
                            className="btn"
                            data-bs-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn">
                            Add item to list
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
