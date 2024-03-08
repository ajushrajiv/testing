const { isRightSolutionForQuestion } = require('./Quiz.js');

//lines 32-37
describe("Questions and answers are correct", () => {
    test("Warum hat der Informatiker immer eine Jacke dabei?", () => {
      expect(isRightSolutionForQuestion("frage_1","Weil er immer kalt gelötet ist."))
      .toBe(true);
    });

    test("Warum haben Programmierer keine Zeit für einen Haarschnitt?", () => {
        expect(isRightSolutionForQuestion("frage_2","Weil sie sich ständig im Code verheddern."))
        .toBe(true);
    });

    test("Warum war der Computer krank?", () => {
        expect(isRightSolutionForQuestion("frage_3","Weil er einen Virus hatte."))
        .toBe(true);
    });

    test("Was sagt ein Informatiker, wenn er das Haus verlässt?", () => {
        expect(isRightSolutionForQuestion("frage_4","Logout."))
        .toBe(true);
    });

    test("Warum wurde die Website verhaftet?", () => {
        expect(isRightSolutionForQuestion("frage_5","Sie hatte zu viele Back-End-Probleme."))
        .toBe(true);
    });
  
  });

//lines 32-37
describe("Questions are correct and answers are wrong", () => {
    test("Warum hat der Informatiker immer eine Jacke dabei?", () => {
      expect(isRightSolutionForQuestion("frage_1","Weil er einen Virus hatte."))
      .toBe(false);
    });

    test("Warum haben Programmierer keine Zeit für einen Haarschnitt?", () => {
        expect(isRightSolutionForQuestion("frage_2","Weil er immer kalt gelötet ist."))
        .toBe(false);
    });

    test("Warum war der Computer krank?", () => {
        expect(isRightSolutionForQuestion("frage_3","Weil er immer kalt gelötet ist."))
        .toBe(false);
    });

    test("Was sagt ein Informatiker, wenn er das Haus verlässt?", () => {
        expect(isRightSolutionForQuestion("frage_4","Weil er immer kalt gelötet ist."))
        .toBe(false);
    });

    test("Warum wurde die Website verhaftet?", () => {
        expect(isRightSolutionForQuestion("frage_5","Weil er immer kalt gelötet ist."))
        .toBe(false);
    });
  
  });

//lines 32-34

test("Questions doesn't exist", () => {
    expect( () => isRightSolutionForQuestion("frage?","no answer"))
    .toThrow(ReferenceError);
});
 
//lines 35,36

test("Answer is not a string", () => {
    expect( () => isRightSolutionForQuestion("frage_1", 123))
    .toThrow(TypeError);
});