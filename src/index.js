/**
 * Todo
 * @typedef {Object} Todo
 * @property {string} id - 아이디
 * @property {string} content - 내용
 * @property {boolean} done - 완료 여부
 * @property {string} category - 카테고리
 * @property {string[]} [tags] - 태그들
 */

/**
 * Todo 생성
 * @param {string} content - 내용
 * @param {string} category - 카테고리
 * @param {string[]} [tags] - 태그들
 * @returns {Todo}
 * @example
 * const todo = CreateTodo('내용', '카테고리', ['태그1', '태그2']);
 * console.log(todo);
 * // {
 * //   id: '1',
 * //   content: '내용',
 * //   done: false,
 * //   category: '카테고리',
 * //   tags: ['태그1', '태그2']
 * // }
 */
function CreateTodo(content, category, tags) {}

/**
 * 특정 Todo 조회
 * @param {string} id - 아이디
 * @returns {Todo}
 * @example
 * const todo = GetTodo('1');
 * console.log(todo);
 * // {
 * //   id: '1',
 * //   content: '내용',
 * //   done: false,
 * //   category: '카테고리',
 * //   tags: ['태그1', '태그2']
 * // }
 */
function GetTodo(id) {}

/**
 * Todo 목록 조회
 * @returns {Todo[]}
 * @example
 * const todos = GetTodos();
 * console.log(todos);
 * // [
 * //   {
 * //     id: '1',
 * //     content: '내용',
 * //     done: false,
 * //     category: '카테고리',
 * //     tags: ['태그1', '태그2']
 * //   },
 * //   {
 * //     id: '2',
 * //     content: '내용2',
 * //     done: true,
 * //     category: '카테고리',
 * //     tags: []
 * //   }
 * // ]
 */
function GetTodos() {}

/**
 * Todo 수정
 * @param {object} todo - Todo
 * @param {string} todo.id - 아이디(수정 불가)
 * @param {string} todo.content - 내용
 * @param {boolean} todo.done - 완료 여부
 * @param {string} todo.category - 카테고리
 * @example
 * const todo = GetTodo('1');
 * const updatedTodo = UpdateTodo({
 *  ...todo,
 * done: true,
 * });
 * // 수정된 Todo
 * // {
 * //   id: '1',
 * //   content: '내용',
 * //   done: true,
 * //   category: '카테고리',
 * //   tags: ['태그1', '태그2']
 * // }
 */
function UpdateTodo(todo) {}

/**
 * Todo 특정 태그 수정
 * @param {string} id - 아이디
 * @param {string} tag - 태그
 * @example
 * const todo = GetTodo('1');
 * const updatedTodo = UpdateTagByTodoId('1', '태그3');
 * // 수정된 Todo
 * // {
 * //   id: '1',
 * //   content: '내용',
 * //   done: false,
 * //   category: '카테고리',
 * //   tags: ['태그1', '태그2', '태그3']
 * // }
 */
function UpdateTagByTodoId(id, tag) {}


/**
 * Todo 삭제
 * @param {string} id - 아이디
 */
function DeleteTodo(id) {}

/**
 * Todo 전체 삭제
 */
function DeleteTodos() {}

/**
 * Todo 특정 태그 삭제
 * @param {string} id - 아이디
 * @param {string} tag - 태그
 * @example
 * const todo = GetTodo('1');
 * const updatedTodo = DeleteTagByTodoId('1', '태그2');
 * // 수정된 Todo
 * // {
 * //   id: '1',
 * //   content: '내용',
 * //   done: false,
 * //   category: '카테고리',
 * //   tags: ['태그1']
 * // }
 */
function DeleteTagByTodoId(id, tag) {}

/**
 * Todo 특정 태그 전체 삭제
 * @param {string} id - 아이디
 * @example
 * const todo = GetTodo('1');
 * const updatedTodo = DeleteTagsByTodoId('1');
 * // 수정된 Todo
 * // {
 * //   id: '1',
 * //   content: '내용',
 * //   done: false,
 * //   category: '카테고리',
 * //   tags: []
 * // }
 */
function DeleteTagsByTodoId(id) {}