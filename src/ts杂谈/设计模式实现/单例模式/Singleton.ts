/**
 * 单例模式：在程序的生命周期内只有一个全局实例，并且不能在 new 出新的实例
 * 如：Cache ，ThreadPool
 *
 * 访问属性：
 *  protected private 表示是否在子类和对象中调用
 * */
class Singleton {
    protected static instance: Singleton

    private constructor() {}

    public static getInstance(): Singleton{
        if (!this.instance) {
            Singleton.instance = new Singleton()
        }
        return this.instance
    }
}
